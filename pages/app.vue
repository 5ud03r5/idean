<template>
    <div class="mt-20">
        <div class="container mx-auto p-10 flex flex-col space-y-2 justify-center items-center">
            <h1 class="text-[30px]">Create an Idea</h1>
            <form class="flex flex-col space-y-1 w-[800px]">
                <input placeholder="Enter idea name here..."
                    class="bg-purple-100 rounded-md p-2  focus:outline-2 focus:outline-purple-300" />

                <textarea placeholder="Describe your idea..." rows="10"
                    class="bg-purple-100 rounded-md resize-none p-2 focus:outline-2 focus:outline-purple-300"></textarea>
                <button type="submit" class="ml-auto bg-purple-400 px-4 py-2 rounded-md text-white hover:bg-purple-300">Add
                    Idea</button>
            </form>

        </div>

    </div>
</template>