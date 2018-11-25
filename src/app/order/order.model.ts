class Order {
    constructor(public address: string,
                public number: string,
                public optionalAddress: string,
                public orderItems: OrderItem[]) {}
}

class OrderItem {
    constructor(public quantity: number, public id: string) {}
}

export { Order, OrderItem };