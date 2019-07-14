<template>
    <div>
        this is detail page
    </div>
</template>

<script>
export default {
    name:'detail',
    mounted(){
    console.log(this.$route.query.id);
    },
    methods:{
        
    }
}
</script>

<style>

</style>
