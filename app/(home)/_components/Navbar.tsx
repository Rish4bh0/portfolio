import { SiGithub, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ActionTooltip } from './ActionTooltip';
import { FaCode } from 'react-icons/fa6';

const Navbar = ({
  className,
  isFooter,
}: {
  className?: string;
  isFooter: boolean;
}) => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/',
      label: 'Linkedin',
      Icon: SiLinkedin,
    },
    {
      link: 'https://github.com/Rish4bh0',
      label: 'Github',
      Icon: SiGithub,
    },
    {
      link: 'https://instagram.com/rish4bh.s',
      label: 'Instagram',
      Icon: SiInstagram,
    },
  ];
  return (
    <nav
      className={cn(
        'py-8 flex items-center justify-between animate-move-down',
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-indigo-500 -rotate-2">
        Rishabh Singh 👨🏻‍💻
      </h1>
      <ActionTooltip label="developer mode" side="bottom" link="/developer">
        <FaCode className="size-8" />
      </ActionTooltip>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} aria-label={social.label} key={index}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
