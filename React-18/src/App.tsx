import Datafetcher from "./ReactDesign_PATTERNS/Challenges/PropRenders/Datafetcher/Datafetcher";

const App = () => {
  return (
    <div>
      <Counter render={(count: number) => <p>The count is :{count}</p>} />
      <MouseTracker
        tracker={(position: any) => (
          <p>
            The position:X:{position.x},Y:{position.y}
          </p>
        )} */}
      {/* />
      <Datafetcher
        users={(user: any) => (
          <div>
            <p>The Name:{user.name}</p>
            <p>The Email:{user.email}</p>
          </div>
        )}
      />
    </div>
  );
};

export default App;
