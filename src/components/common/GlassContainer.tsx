import React from "react";
import "./GlassContainer.css";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function GlassContainer({ className = "", children, ...rest }: GlassContainerProps) {
  return (
    <div className={`glass-container ${className}`.trim()} {...rest}>
      <div className="glass-content">
        {children ?? (
          <>
            <h1>Title</h1>
            <p>Description</p>
          </>
        )}
      </div>
    </div>
  );
}

export default GlassContainer
