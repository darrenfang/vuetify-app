export default {
  dictionary: {
    messages: {
      mobile: () => 'The value is not valid.'
    },
    custom: {
      username: {
        required: '用户名不能为空',
        max: '用户名不能大于 32 个字符'
      },
      name: {
        required: '名称不能为空',
        max: '名称不能大于 32 个字符'
      },
      displayName: {
        required: '显示名称不能为空',
        max: '显示名称不能大于 32 个字符'
      },
      description: {
        required: '描述不能为空'
      },
      oldPassword: {
        required: '原始密码不能为空'
      },
      newPassword: {
        required: '新密码不能为空',
        min: ' 新密码不少于 8 个字符'
      },
      confirmPassword: {
        required: '确认密码不能为空',
        min: ' 确认密码不少于 8 个字符',
        confirmed: '确认密码必须和密码相同'
      },
      mobile: {
        required: '手机号码不能为空',
        mobile: '请输入正确的手机号码'
      }
    }
  }
}
