import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function CTAButton({
  href,
  children,
  onClick,
  className = '',
}: CTAButtonProps) {
  const baseStyles =
    'w-[271px] h-[50px] flex-shrink-0 rounded-full border border-white bg-radial-1 shadow-cta text-white text-xl font-semibold flex items-center justify-center transition-transform duration-200 hover:scale-105'

  const combinedStyles = `${baseStyles} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}