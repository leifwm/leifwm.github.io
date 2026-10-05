import {Surface, Link} from "@heroui/react";
import { LinkedIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";


export function ContactCard() {
  return (
    <Surface className="mx-auto m-10 w-80 rounded-2xl bg-background" variant="default">
      <h3 className="text-left text-4xl font-light text-foreground">Find me at:</h3>
      <p className="text-left text-4xl mt-4 font-light">
        leifwm@gmail.com
      </p>
      <div className="flex ">
        <Link
          aria-label="LinkedIn"
          href={siteConfig.links.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIcon size={48} className="mt-4 text-[#0077B5]" />
        </Link>
      </div>
    </Surface>
  );
}