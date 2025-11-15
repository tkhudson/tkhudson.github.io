import React from 'react';
import { motion } from 'framer-motion';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  theme?: 'landing' | 'tyler' | 'persevus' | 'serviam';
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const { theme = 'landing', fallback: Fallback } = this.props;

      if (Fallback) {
        return <Fallback error={this.state.error} resetError={this.resetError} />;
      }

      // Theme-aware fallback UI
      const themeStyles = {
        landing: {
          bg: 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900',
          text: 'text-white',
          accent: 'text-blue-400',
          button: 'bg-blue-600 hover:bg-blue-700'
        },
        tyler: {
          bg: 'bg-tech-bg',
          text: 'text-white',
          accent: 'text-tech-accent',
          button: 'bg-tech-accent text-black hover:bg-tech-accent/80'
        },
        persevus: {
          bg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
          text: 'text-white',
          accent: 'text-red-400',
          button: 'bg-red-600 hover:bg-red-700'
        },
        serviam: {
          bg: 'bg-primary',
          text: 'text-white',
          accent: 'text-accent',
          button: 'bg-accent text-black hover:bg-accent/80'
        }
      };

      const styles = themeStyles[theme];

      return (
        <div className={`min-h-screen ${styles.bg} ${styles.text} flex items-center justify-center px-4`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md"
          >
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className={`text-gray-300 mb-8 leading-relaxed`}>
              We're experiencing a technical issue. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="space-y-4">
              <button
                onClick={this.resetError}
                className={`${styles.button} px-6 py-3 rounded font-semibold transition-colors`}
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="block w-full text-gray-400 hover:text-white transition-colors underline"
              >
                Return to Portal
              </button>
            </div>
            {this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                  Error Details
                </summary>
                <pre className="mt-2 text-xs bg-black/20 p-4 rounded overflow-auto">
                  {this.state.error.message}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
