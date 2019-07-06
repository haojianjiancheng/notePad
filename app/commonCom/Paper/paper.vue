<template>
    <div class="common-paper">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name : "paper"
    }
</script>

<style lang="less">
    .common-paper{
        box-shadow: 1px 0 6px -2px black;
    }
</style>