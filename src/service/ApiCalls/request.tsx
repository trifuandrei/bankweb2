const api_url = process.env.REACT_APP_API_URL
const requests = {
    fetchDeposits: api_url + '/deposit/Get?operationTypeId=1',
    fetchWithdrawals: api_url + '/withdrawal/Get?operationTypeId=2',
    fetchTradeOrder: api_url + '/tradeorder/Get?operationTypeId=3',
    fetchOperationTypes: api_url + '/OperationType/GetAll',
    fetchCoins: api_url + '/Coin/GetAll',
    addCoin: api_url + '/Coin/AddCoin',
    deleteCoin: api_url + '/Coin/Delete?id=',
    fetchCoin: api_url + '/Coin/GetCoin?id=',
    editCoin: api_url + '/Coin/EditCoin',
    getCoinById: api_url + '/Coin/GetCoinByIdOrName',
    getCoinByName: api_url + '/Coin/GetCoinByIdOrName'
}
export default requests;