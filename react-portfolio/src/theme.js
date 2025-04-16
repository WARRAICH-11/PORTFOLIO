const theme = {
  colors: {
    primary: '#00A8CC',    // Bright teal
    secondary: '#0C7B93',  // Darker teal
    accent: '#27496D',     // Navy blue
    dark: '#142850',       // Dark blue background
    light: '#F1F1F1',      // Off-white for text
    gray: '#888888',       // Gray for secondary text
    success: '#28a745',    // Green for success messages
    error: '#dc3545',      // Red for error messages
  },
  
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
    code: "'Fira Code', monospace",
  },
  
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
    huge: '3rem',
  },
  
  breakpoints: {
    xs: '400px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
  },
  
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.15)',
    large: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  
  transition: 'all 0.3s ease-in-out',
  
  // Utility for consistent media queries
  media: {
    xs: `@media (max-width: 400px)`,
    sm: `@media (max-width: 576px)`,
    md: `@media (max-width: 768px)`,
    lg: `@media (max-width: 992px)`,
    xl: `@media (max-width: 1200px)`,
  },
};

export default theme; 