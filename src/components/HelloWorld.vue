<template>
  <div class="hello">
    <draggable
        class="draggable list1"
        :list="list1"
        :options="{ group: { name: 'people', pull: 'clone', put: false }}"
        :clone="cloneDog"
        @change="log"
      >
        <div class="list-group-item" v-for="element in list1" :key="element.id">
          {{ element.name }}
        </div>
      </draggable>

<div></div>
<div></div>

    <draggable
        class="draggable list2"
        :list="list2"
        :options="{ group: 'people', animation: 150 }"
        @change="log"
      >
        <div class="list-group-item" v-for="element in list2" :key="element.id">
          {{ element.name }}
        </div>
      </draggable>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: { draggable },
  data() {
    return {
      list1: [
        { name: "dog 1", id: 1 },
      ],
      list2: [
        { name: "cat 5", id: 5 },
        { name: "cat 6", id: 6 },
        { name: "cat 7", id: 7 }
      ],
      next: 8,
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    },
    cloneDog() {
      let newId = this.next++;
      return {
        id: newId,
        name: `cat ${newId}`
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.draggable {
  padding: 10px;
  background-color: beige;
}
.draggable div {
  background-color: cadetblue;
  margin: 10px;
  padding: 10px;
}
</style>
