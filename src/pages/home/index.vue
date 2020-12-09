<template>
  <div class="calendar">
    <div>
      <h4>快看日历</h4>
    </div>
    <a-calendar @panelChange="onPanelChange" />
  </div>
</template>

<script>
export default {
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
};
</script>

<style lang="less">
.calendar {
  height: auto;
}
</style>
