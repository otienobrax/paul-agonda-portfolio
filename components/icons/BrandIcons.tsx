type IconProps = {
  size?: number;
  className?: string;
};

export const LinkedInIcon = ({ size = 20, className = "" }: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-label="LinkedIn"
  >
    <path d="M20.447 20.452h-3.554V14.85c0-1.337-.027-3.06-1.865-3.06-1.867 0-2.154 1.459-2.154 2.967v5.695H9.32V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.814 20.452H3.86V9h2.954v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const XIcon = ({ size = 20, className = "" }: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-label="X (Twitter)"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.186 9.467 12.508h-7.416l-5.805-7.584-6.637 7.584H.47l8.6-9.83L.002 1.153h7.604l5.243 6.932z" />
  </svg>
);

export const FacebookIcon = ({ size = 20, className = "" }: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-label="Facebook"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);