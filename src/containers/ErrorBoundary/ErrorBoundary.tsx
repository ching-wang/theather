import React, {Component, ErrorInfo, ReactNode} from "react";

interface Props {
    children: ReactNode;
}

interface State {
    error: Error | undefined,
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        error: undefined,
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return {error, hasError: true};
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1> Something went wrong.</h1>
                    <div>
                        {this.state.error && this.state.error.toString()}
                    </div>
                </>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;