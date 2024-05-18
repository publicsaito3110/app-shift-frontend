<template>
    <div>
      <h1>ユーザー検索結果</h1>
      <table>
        <tr>
          <td>ID</td>
          <td>Name</td>
        </tr>
        <tr>
          <td> {{ res }} </td>
          <td> あ </td>
        </tr>
      </table>
    </div>
  </template>

<script>

export default {
  props: {
    res: String
  }
   ,

  created() {

    
  },
    methods: {
    test() {
        var query= this.$route.query
      console.log(query)
    }
}
}
</script>