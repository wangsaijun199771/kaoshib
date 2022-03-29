<template>
  <div class="homeIndex">
    <div class="gk">
      <p>概况</p>
      <ul>
        <li><img src="@/assets/a1.png" alt="" /></li>
        <li><img src="@/assets/a2.png" alt="" /></li>
        <li><img src="@/assets/a3.png" alt="" /></li>
        <li><img src="@/assets/a4.png" alt="" /></li>
      </ul>
    </div>
    <div class="bt">
      <p>Element ui组件</p>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <div class="f1" style="margin: 20px">
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <div class="block">
          <el-date-picker
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </div>

        <template>
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </template>

        <!-- 评分 -->
        <div class="block" style="margin-top: 10px">
          <el-rate></el-rate>
        </div>
        <!-- 备选项 -->
        <div style="margin-top: 10px">
          <template>
            <el-radio label="1">备选项</el-radio>
            <el-radio label="2">备选项</el-radio>
          </template>
        </div>
        <div>
          <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button
              type="warning"
              icon="el-icon-star-off"
              circle
            ></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </el-row>
        </div>
      </div>
      <div class="f2" style="margin: 20px">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
        <el-form>
          <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </el-row>
        </el-form>
      </div>
      <div class="f3">
        <template>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>
        </template></div
    ></el-form>
  </div>
</template>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "homeIndex",
  data() {
    return {
       checkList: ['选中且禁用','复选框 A'],
      num: 1,
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.homeIndex {
  background: rgb(236, 240, 245);
  height: 100%;
  width: 100%;
  padding: 10px;
}
.gk p {
  background: #fff;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  border: 1px solid;
}
.gk > ul {
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin: 10px 0;
}
.gk > ul > li > img {
  width: 350px;
}
.gk > ul > li {
  width: 350px;
  padding: 5px;
}
.bt {
  background: #fff;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  border: 1px solid;
}
.f1,
.f2,
.f3 {
  display: flex;
}
</style>