<template>
  <div class="demo-wrap">
    <demo-block
      :title="t('basicUsage')"
      :section-style="sectionStyle"
    >
      <PressCheckbox
        :value="checkedMap.basic"
        @change="v=>onChange(v, 'basic')"
      >
        {{ t('checkbox') }}
      </PressCheckbox>
    </demo-block>

    <demo-block
      :title="t('disabled')"
      :section-style="sectionStyle"
    >
      <PressCheckbox
        :value="checkedMap.disabled"
        disabled
        @change="v=>onChange(v, 'disabled')"
      >
        {{ t('checkbox') }}
      </PressCheckbox>
    </demo-block>


    <demo-block
      :title="t('customShape')"
      :section-style="sectionStyle"
    >
      <PressCheckbox
        shape="square"
        :value="checkedMap.shape"
        @change="v=>onChange(v, 'shape')"
      >
        {{ t('checkbox') }}
      </PressCheckbox>
    </demo-block>

    <demo-block
      :title="t('customColor')"
      :section-style="sectionStyle"
    >
      <PressCheckbox
        :value="checkedMap.color"
        checked-color="#07c160"
        @change="v=>onChange(v, 'color')"
      >
        {{ t('checkbox') }}
      </PressCheckbox>
    </demo-block>

    <demo-block
      :title="t('customIconSize')"
      :section-style="sectionStyle"
    >
      <PressCheckbox
        :value="checkedMap.size"
        :icon-size="25"
        @change="v=>onChange(v, 'size')"
      >
        {{ t('checkbox') }}
      </PressCheckbox>
    </demo-block>

    <demo-block
      :title="t('disableLabel')"
      :section-style="sectionStyle"
    >
      <PressCheckbox
        :value="checkedMap.noLabel"
        label-disabled
        @change="v=>onChange(v, 'noLabel')"
      >
        {{ t('checkbox') }}
      </PressCheckbox>
    </demo-block>

    <demo-block
      :title="t('title3')"
      :section-style="sectionStyle"
    >
      <PressCheckboxGroup
        :value="checkedMap.group"
        @change="v=>onChange(v, 'group')"
      >
        <PressCheckbox
          name="a"
          :custom-style="customStyle"
        >
          {{ t('checkbox') }} a
        </PressCheckbox>
        <PressCheckbox
          name="b"
          :custom-style="customStyle"
        >
          {{ t('checkbox') }} b
        </PressCheckbox>
        <PressCheckbox
          name="c"
          :custom-style="customStyle"
        >
          {{ t('checkbox') }} c
        </PressCheckbox>
      </PressCheckboxGroup>
    </demo-block>

    <demo-block
      :title="t('title4')"
      :section-style="sectionStyle"
    >
      <PressCheckboxGroup
        :value="checkedMap.groupMax"
        :max="2"
        @change="v=>onChange(v, 'groupMax')"
      >
        <PressCheckbox
          name="a"
          :custom-style="customStyle"
        >
          {{ t('checkbox') }} A
        </PressCheckbox>
        <PressCheckbox
          name="b"
          :custom-style="customStyle"
        >
          {{ t('checkbox') }} B
        </PressCheckbox>
        <PressCheckbox
          name="c"
          :custom-style="customStyle"
        >
          {{ t('checkbox') }} C
        </PressCheckbox>
      </PressCheckboxGroup>
    </demo-block>
  </div>
</template>
<script>
import PressCheckboxGroup from 'press-ui/press-checkbox-group/press-checkbox-group.vue';
import PressCheckbox from 'press-ui/press-checkbox/press-checkbox.vue';


export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      customIcon: '自定义图标',
      customIconSize: '自定义大小',
      customColor: '自定义颜色',
      customShape: '自定义形状',
      title3: '复选框组',
      title4: '限制最大可选数',
      title5: '搭配单元格组件使用',
      toggleAll: '全选与反选',
      checkAll: '全选',
      inverse: '反选',
      horizontal: '水平排列',
      disableLabel: '禁用文本点击',
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      customIconSize: 'Custom IconPlus Size',
      customColor: 'Custom Color',
      customShape: 'Custom Shape',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside a Cell',
      toggleAll: 'Toggle All',
      checkAll: 'Check All',
      inverse: 'Inverse',
      horizontal: 'Horizontal',
      disableLabel: 'Disable label click',
    },
  },
  components: {
    PressCheckbox,
    PressCheckboxGroup,
  },
  data() {
    return {
      checkedMap: {
        basic: true,
        shape: true,
        size: true,
        color: true,
        noLabel: true,
        disabled: true,
        group: ['a', 'b'],
        groupMax: [],
      },
      sectionStyle: 'margin: 1px 18px;',
      customStyle: 'margin-bottom: 8px;',
    };
  },
  methods: {
    onChange(val, type) {
      console.log('[onChange.val]', val, type);
      this.checkedMap[type] = val;
    },
  },
};
</script>

<style scoped lang="scss">
</style>

