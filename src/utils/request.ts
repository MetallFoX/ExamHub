export async function request<V>(url: string, options?: RequestInit): Promise<V> {
    const response = await fetch(url, options)
    if (response.ok) {
        return JSON.parse(await response.text())
    } else {
        return Promise.reject("Fetch error.")
    }
}