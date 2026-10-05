import json
from pathlib import Path
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
 browser=p.chromium.launch(channel='msedge',headless=True)
 for country,expected in [('BR','pt'),('US','en'),('PT','pt')]:
  context=browser.new_context(locale='en-US')
  context.route('https://ipapi.co/country/',lambda route:route.fulfill(status=200,body=country))
  page=context.new_page();page.goto('http://localhost:5173/about?test=1#about-leadership');page.wait_for_url(f'**/{expected}/about?test=1#about-leadership')
  page.locator('h1').wait_for();assert page.locator('html').get_attribute('lang')==('pt-BR' if expected=='pt' else 'en')
  print('Country',country,expected,'PASS');context.close()
 context=browser.new_context(locale='pt-BR');context.route('https://ipapi.co/country/',lambda route:route.abort())
 page=context.new_page();page.goto('http://localhost:5173/');page.wait_for_url('**/pt/');print('Offline language fallback PASS');context.close()
 context=browser.new_context(locale='en-US');context.route('https://ipapi.co/country/',lambda route:route.fulfill(status=200,body='US'));page=context.new_page()
 errors=[];page.on('pageerror',lambda error:errors.append(str(error)))
 for locale in ['pt','en']:
  for route in ['','about','cv','trato','ser','pertinho','ipadsurvey']:
   page.goto(f'http://localhost:5173/{locale}/{route}');page.locator('h1').first.wait_for();page.wait_for_timeout(250)
   text=page.locator('body').inner_text();Path(f'C:/Users/weste/.codex/tmp/{locale}-{route or "home"}.txt').write_text(text,encoding='utf-8')
   assert page.locator('html').get_attribute('lang')==('pt-BR' if locale=='pt' else 'en')
   assert page.locator('a[href="/about"]').count()==0
   assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth')
   print(locale,route or 'home',page.locator('h1').first.inner_text().replace('\n',' '),'PASS')
 page.goto('http://localhost:5173/pt/about?test=1#about-leadership');page.locator('.language-switch a[lang="en"]').first.click();page.wait_for_url('**/en/about?test=1#about-leadership')
 context.unroute('https://ipapi.co/country/');context.route('https://ipapi.co/country/',lambda route:route.fulfill(status=200,body='BR'))
 page.goto('http://localhost:5173/');page.wait_for_url('**/en/');print('Switch preserves page/query/anchor and saved preference overrides Brazilian IP PASS')
 page.set_viewport_size({'width':390,'height':844})
 for route in ['','about','trato','ser','pertinho','ipadsurvey']:
  page.goto('http://localhost:5173/pt/'+route);page.locator('h1').first.wait_for();page.wait_for_timeout(300)
  assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'),route
 page.screenshot(path='C:/Users/weste/.codex/tmp/pt-mobile.png',full_page=True)
 assert not errors,errors
 print('Mobile layout and browser errors PASS');browser.close()
