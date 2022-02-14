import React from "react";

// Exported if ever needed, though unlikely.
export type UndedComponent<P> = React.FC<
  P & {
    loading: boolean;
  }
>;

// Very simple, but allows us to separate skeleton logic from component logic
// Using shared styles reduces code to maintain, while still keeping js separate
export default function makeUndead<Props = any>(
  Component: React.FC<Props>,
  Skeleton: React.FC<Props>
): UndedComponent<Props> {
  return (props) => {
    // Technically both children have loading, but using it would break the abstraction model
    return props.loading ? <Skeleton {...props} /> : <Component {...props} />;
  };
}
