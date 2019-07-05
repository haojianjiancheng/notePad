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
        margin : 0 auto;
        background-color: rgb(231, 227, 227);
        box-shadow: 1px 0 6px -2px black;
    }
</style>