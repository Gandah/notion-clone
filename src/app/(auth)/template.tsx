import { PropsWithChildren } from "react";



const Template = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen p-6 justify-center"  
    >
      {children}
    </div>
  );
};

export default Template;