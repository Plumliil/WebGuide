<template>
  <div class="create-post-page">
    <h4>新建</h4>

    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">网站名</label>
        <validate-input
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入网站名称"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">网站地址</label>
        <validate-input
          :rules="urlRules"
          v-model="urlVal"
          placeholder="请输入网站地址"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">网站详情</label>
        <validate-input
          :rules="detailRules"
          rows="10"
          v-model="descriptionVal"
          placeholder="请输入网站详情"
          type="text"
          tag="textarea"
        />
      </div>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ValidateForm from "../components/ValidateForm.vue";
import ValidateInput from "../components/ValidateInput.vue";
import { GlobalDataProps, PostProps, RuleProp } from "../interface";
interface RulesGroup {
  titleRules: RuleProp[];
  urlRules: RuleProp[];
  detailRules: RuleProp[];
}
export default defineComponent({
  name: "CreatePost",
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const router = useRouter();
    const rules: RulesGroup = {
      titleRules: [{ type: "required", message: "网站名称不能为空" }],
      urlRules: [{ type: "required", message: "网站地址不能为空" }],
      detailRules: [{ type: "required", message: "网站描述不能为空" }],
    };

    const titleVal = ref("");
    const descriptionVal = ref("");
    const urlVal = ref("");
    const logoVal = ref("");
    const onFormSubmit = (result: boolean) => {
      if (result) {
        console.log("createPost", result);

        const uid = store.state.user?.id;
        console.log(uid);
        if (uid) {
          const newPost: PostProps = {
            id: new Date().getTime() + "",
            name: titleVal.value,
            description: descriptionVal.value,
            url: urlVal.value,
            logo: logoVal.value || "logo",
            contributor: uid + "",
            createdAt: new Date().toLocaleString(),
          };
          store.commit("createPost", newPost);
          router.push({
            name: "column",
            params: {
              id: newPost.id,
            },
          });
        }
      }
    };
    return {
      onFormSubmit,
      ...rules,
      titleVal,
      descriptionVal,
      urlVal,
      logoVal,
    };
  },
});
</script>

<style scoped></style>
