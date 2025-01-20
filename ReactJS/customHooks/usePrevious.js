function usePrevious(value) {
  const valueRef = useRef();

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
}
export default usePrevious;
