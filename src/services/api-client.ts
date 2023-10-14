import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f501bb6450244d76937ab266d590c2f8'
  }
})