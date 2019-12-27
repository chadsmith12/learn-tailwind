<template>
  <div class="h-screen flex flex-col">
    <header class="flex flex-shrink-0">
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
    </header>
    <div class="flex-1 flex">
      <div class="p-6 w-64 bg-gray-100">
        <nav>
          <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Mailboxes</h2>
          <div class="mt-3">
            <a
              href="#"
              class="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 20 20">
                  <path
                    d="M18 2a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
                  />
                </svg>
                <span class="ml-2 text-gray-900">Inbox</span>
              </span>
              <Badge background-color="gray-200" text-color="gray-700">6</Badge>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 20 20">
                  <path d="M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z" />
                </svg>
                <span class="ml-2 text-gray-900">Flagged</span>
              </span>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 20 20">
                  <path
                    d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"
                  />
                </svg>
                <span class="ml-2 text-gray-900">Drafts</span>
              </span>
              <Badge background-color="gray-200" text-color="gray-700">2</Badge>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 20 20">
                  <path
                    d="M10 20a10 10 0 110-20 10 10 0 010 20zM7 6v2a3 3 0 106 0V6a3 3 0 10-6 0zm-3.65 8.44a8 8 0 0013.3 0 15.94 15.94 0 00-13.3 0z"
                  />
                </svg>
                <span class="ml-2 text-gray-900">Assigned</span>
              </span>
              <Badge background-color="gray-200" text-color="gray-700">1</Badge>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 20 20">
                  <path
                    d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"
                  />
                </svg>
                <span class="ml-2 text-gray-900">Closed</span>
              </span>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg class="h-5 w-5 fill-current text-gray-700" viewBox="0 0 20 20">
                  <path
                    d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"
                  />
                </svg>
                <span class="ml-2 text-gray-900">Junk</span>
              </span>
            </a>
          </div>
        </nav>
      </div>
      <main class="bg-gray-200">
        <div></div>
        <div></div>
      </main>
    </div>
  </div>
</template>

<script>
import Badge from "@/components/atoms/Badge.vue";

export default {
  components: {
    Badge
  }
};
</script>