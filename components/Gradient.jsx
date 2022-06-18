export default function Gradient({ className }) {
  return (
    <div className="absolute inset-0 bg-[url(/bg.jpg)] -z-10 min-h-screen bg-primary-50 bg-fixed bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-fixed bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] "></div>
      <div
        className="absolute inset-0 bg-primary-900/10 bg-[bottom_1px_center] dark:border-b dark:border-primary-100/5 "
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
        }}
      />
    </div>
  );
}
