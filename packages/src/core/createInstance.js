// 我猜测这里就是创建组件实例
export function createInstance(fiber) {
  const instance = new fiber.type(fiber.props)
  instance._internalfiber = fiber
  return instance
}
