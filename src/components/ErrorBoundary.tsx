import { Component, ErrorInfo, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

export class ErrorBoundary extends Component<{ children: ReactElement }> {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("Errorboundary cought an error: ", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h1>There was an error with this listing </h1>
          <Link to="/">click here </Link> to back to the home page.
        </div>
      );
    }
    return this.props.children;
  }
}
