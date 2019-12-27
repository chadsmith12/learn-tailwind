<template>
  <div>
    <header class="flex">
      <div class="w-64 flex-shrink-0 px-4 py-3 bg-gray-800">
        <button class="block w-full flex items-center">
          <img
            class="h-8 w-8 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1551734465-bf8cc92570f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=144&q=80"
            alt="Avatar"
          />
          <span class="ml-4 mr-2 text-sm font-medium text-white">Monica White</span>
          <svg class="ml-auto h-6 w-6 stroke-current text-gray-400" viewBox="0 0 24 24">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-between px-6 bg-gray-700">
        <nav class="flex">
          <a
            href="#"
            class="inline-block px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white"
          >Mailbox</a>
          <a
            href="#"
            class="ml-2 inline-block px-3 py-2 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600"
          >Customers</a>
          <a
            href="#"
            class="ml-2 inline-block px-3 py-2 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600"
          >Reporting</a>
          <a
            href="#"
            class="ml-2 inline-block px-3 py-2 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600"
          >Manage</a>
        </nav>
        <div class="flex items-center">
          <div class="relative w-64">
            <span class="absolute inset-y-0 left-0 pl-2 flex items-center">
              <svg class="h-5 w-5 fill-current text-gray-500" viewBox="0 0 20 20">
                <path
                  d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 000 12z"
                />
              </svg>
            </span>
            <input
              class="block pl-8 pr-4 py-2 leading-tight w-full bg-gray-900 rounded-full text-sm placeholder-gray-400 text-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-600 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <button class="ml-6 text-gray-400 hover:text-gray-200">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z"
              />
            </svg>
          </button>
          <button class="ml-4 text-gray-400 hover:text-gray-200">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0zm-3 8v2h2v-2H9z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div></div>
    </header>
    <div></div>
    <main>
      <div></div>
      <div></div>
    </main>
  </div>
</template>

<script>
export default {};
</script>