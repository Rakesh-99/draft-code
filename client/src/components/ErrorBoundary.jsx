import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Caught by ErrorBoundary:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
          <p className="opacity-60 mb-6">
            This part of the page hit an unexpected error.
          </p>
          <button
            onClick={this.handleReset}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
          >
            Back to home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;