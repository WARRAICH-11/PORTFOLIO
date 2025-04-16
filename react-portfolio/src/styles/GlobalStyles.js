import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    --dark-color: #111827;
    --light-color: #f3f4f6;
    --accent-color: #8b5cf6;
    --text-color: #1f2937;
    --light-text-color: #6b7280;
    --background-color: #ffffff;
    --dark-background: #0f172a;
    --card-background: #f9fafb;
    --transition: all 0.3s ease-in-out;
    --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --gradient: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.7;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button, input, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  section {
    padding: 5rem 1rem;

    @media (min-width: 768px) {
      padding: 6rem 2rem;
    }

    @media (min-width: 1024px) {
      padding: 7rem 3rem;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    position: relative;
    text-align: center;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 5rem;
      height: 0.25rem;
      background: var(--gradient);
      border-radius: 0.5rem;
    }
  }

  .highlight {
    color: var(--primary-color);
  }

  .gradient-text {
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: 0.5rem;
    background: var(--primary-color);
    color: white;
    font-weight: 600;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 20px -3px rgba(0, 0, 0, 0.15);
    }
  }

  .btn-outline {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    
    &:hover {
      background: var(--primary-color);
      color: white;
    }
  }

  .card {
    background: var(--card-background);
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
  }

  .flex {
    display: flex;
  }

  .grid {
    display: grid;
  }

  .text-center {
    text-align: center;
  }

  .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(20px);
    transition: all 1s;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }

  @media (prefers-reduced-motion) {
    .hidden {
      transition: none;
    }
  }
`;

export default GlobalStyles; 