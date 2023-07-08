import { Component, ErrorInfo, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

type ErrorBoundaryStateType = {
  error: Error | undefined;
  hasError: boolean;
};

export default class ErrorBoundary extends Component<{
  children: ReactElement;
}> {
  state: ErrorBoundaryStateType = {
    hasError: false,
    error: undefined,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("Errorboundary cought an error: ", error, errorInfo);
    this.setState({
      error,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="flex h-[100vh] w-[100wh] flex-col gap-10 bg-white pt-[10%]">
          <div className="text-center ">
            <span className="blue-text-animation pr-[400px] text-9xl">: (</span>
          </div>
          <div className="text-md max-w-lg self-center ">
            There was an error with this listing{" "}
            <Link to="/" className="blue-text-animation">
              click here{" "}
            </Link>{" "}
            to back to the home page.
            <br />
            Error:{" "}
            <span className="text-red-600">{this.state.error?.message}</span>
          </div>
          {/* <div className="max-w-lg self-center text-xs text-red-400">
            {this.state.error?.stack}
          </div> */}
        </div>
      );
    }
    return this.props.children;
  }
}
