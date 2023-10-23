<template>
  <div class="header">
    <img src="../assets/photo/03_180x.webp" style="width: 130px;height: auto;">
    <div>
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
        <path
          d="M33.07 33.071c6.25-6.248 6.25-16.379 0-22.627-6.248-6.249-16.378-6.249-22.627 0-6.248 6.248-6.248 16.379 0 22.627 6.249 6.248 16.38 6.248 22.628 0zm0 0l8.486 8.485"
          stroke="#162950" stroke-width="4" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.header {
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  padding: 15px 60px;
  transition: background-color .5s;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
}
</style>