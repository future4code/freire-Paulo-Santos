type Client = {
	cliente: string,
	saldoTotal: number,
	debitos: number[]
}

const clientsAccounts: Client[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const debitAccounts = (clientsAccounts: Client[]): Client[] => {
	clientsAccounts.forEach((client) => {
		let soma = 0
		// for (let i = 0; i <= client.debitos.length - 1; i++) {
		// 	soma += client.debitos[i];
		// }
		const debitsSum = client.debitos.reduce((a, b) => {
			return a + b
		}, soma)
		client.saldoTotal -= debitsSum;
		client.debitos = []
	})

	const debitsList = clientsAccounts.filter((client) => {
		return client.saldoTotal < 0
	})

	return debitsList
}

console.log(debitAccounts(clientsAccounts))