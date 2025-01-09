```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // This effect runs only once after the component mounts
    console.log('Component mounted');
    return () => {
      // Cleanup function, runs when the component unmounts
      console.log('Component unmounted');
      setMounted(false);
    };
  }, []); // Empty dependency array ensures only one execution

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Mounted: {mounted ? 'yes' : 'no'}</p>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```