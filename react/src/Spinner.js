const Spinner = () => {
    return (
        <div role="status">
            <div aria-hidden="true" className="w-10 h-10 rounded-full border-4 border-text-gray-200 border-s-blue-600 animate-spin"></div>
            <span class="sr-only">Loading...</span>
        </div>);
}

export default Spinner;