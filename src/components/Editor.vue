<template>
    <v-container>
        <v-row>
            <v-col md="2"></v-col>
            <v-col md="6">
                <Editor></Editor>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Editor from '../components/testpages/Editor'
export default {    
    data:() => ({
        name: 'editors'
    }),
    components: {
        Editor,
    }
}
</script>