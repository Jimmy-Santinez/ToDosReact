function TodosLoading() {
    return(
        <div class="border border-blue-300 shadow rounded-md p-4 bg-cardBg/70 mb-3">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-cardBg h-10 w-10"></div>
                <div class="flex-1 py-3">
                    <div class="h-2 bg-cardBg rounded"></div>
                </div>
                <div class="rounded-full bg-cardBg h-10 w-10"></div>
            </div>
        </div>
    );
};

export { TodosLoading }