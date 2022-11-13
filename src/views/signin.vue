<template>
    <h1>Signin</h1>
    <validate-form @form-submit="onFormSubmit">
      <template #default>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <validate-input
            :rules="emailRules"
            v-model="emailValue"
            placeholder="hello there"
          ></validate-input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <validate-input
            :rules="passwordRules"
            v-model="passwordValue"
            placeholder="hello there"
            type="password"
          ></validate-input>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
      </template>
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useStore } from "vuex";
  import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
  import ValidateForm from "../components/ValidateForm.vue";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    name: "Signin",
    components: {
      ValidateForm,
      ValidateInput,
    },
    setup() {
      const router = useRouter();
      const store = useStore();
      store.commit("unActivateSideNav");
      const emailRules: RulesProp = [
        { type: "required", message: "电子邮箱地址不能为空" },
        { type: "email", message: "请输入正确的电子邮箱格式" },
      ];
      const passwordRules: RulesProp = [
        { type: "required", message: "密码不能为空" },
      ];
      const emailValue = ref("111@qq.com");
      const passwordValue = ref("123");
      const onFormSubmit = (result: boolean) => {
        console.log(result);
        if (result) {
          router.push({
            name: "userSiteList",
            params: {
              id: 1,
            },
          });
          // store.commit('login',userData)
          store.commit("login");
        }
      };
      return {
        emailRules,
        emailValue,
        passwordRules,
        passwordValue,
        onFormSubmit,
      };
    },
  });
  </script>
  
  <style scoped></style>
  