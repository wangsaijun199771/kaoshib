<template>
  <div>
      <el-table>

        <!-- 编辑与删除 -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
        </template>
    </el-table>
    
    <el-table :data="arrs" border>
      <el-table-column prop="id" label="文章标题"> </el-table-column>
      <el-table-column prop="name" label="作者"> </el-table-column>
      <el-table-column prop="text" label="浏览量"> </el-table-column>
      <el-table-column prop="texta" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <!-- 编辑与删除 -->
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗表格 -->
    <el-dialog
      :title="i === 1 ? '添加用户' : '编辑'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文本" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="fnsure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import instance from "@/api/index";
export default {
  name: "HomeUser",
  data() {
    return {
      arrs: null,
      // 防抖封装
      debounceedit: null,
      debouncedelete: null,
      dialogFormVisible: false,
      form: {
        id: "0",
        name: "张三",
        text: "嗨嗨嗨",
      },
      formLabelWidth: "100px",
      i: 0, //区分是不是添加业务还是修改业务
    };
  },
  methods: {
    fnsure() {
      this.dialogFormVisible = false;
      if (this.i === 1) return this.handleAdd(); //添加
      this.edithomeUser(); //修改
    },
    async handleAdd() {
      // 添加
      let name = this.form.name;
      let text = this.form.text;
      console.log(name, text);
      let { data } = await instance.post("/homeUser", { name, text });
      console.log(data);
      this.gethomeUser();
    },
    async gethomeUser() {
      let { data } = await instance.get("/homeUser");
      this.arrs = data;
      console.log(data);
    },
    // 用户行为
    handleEdit(a, b) {
      // 编辑
      console.log(a, b);
      this.i = 0;
      this.dialogFormVisible = !this.dialogFormVisible;
      this.form.name = b.name;
      this.form.text = b.text;
      this.form.id = b.id;
    },
    handleDelete(a, b) {
      console.log(a, b);
      this.$confirm("是否删除？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 确定的回调函数
          console.log("删除了");
          this.deletehomeUser(a);
        })
        .catch(() => {
          // 取消的回调函数
          console.log("你取消了");
        });
    },
    // 删除与编辑
    async deletehomeUser(index) {
      let { data } = await instance.delete("/homeUser/" + index);
      console.log(data);
      this.gethomeUser();
    },
    async edithomeUser() {
      let name = this.form.name;
      let text = this.form.text;
      let id = this.form.id;
      let { data } = await instance.put("/homeUser/edit/" + id, {
        name,
        text,
      });
      console.log(data);
      this.gethomeUser();
    },
  },
  created() {
    this.gethomeUser();
  },
};
</script>
<style scoped>
.addbtn {
  float: right;
  margin-right: 140px;
  margin-top: 40px;
}
</style>