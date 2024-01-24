import React from 'react';

function LoadingPostCard() {
  return (
    <div class="w-1/3">
      <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
        <div class="h-48 bg-gray-300"></div>
        <div class="px-6 py-4">
          <div class="h-6 bg-gray-300 mb-2"></div>
          <div class="h-4 bg-gray-300 w-2/3"></div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
          <div class="h-4 bg-gray-300 w-1/2"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPostCard;