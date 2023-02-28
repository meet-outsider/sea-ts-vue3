interface ILocalStorage {
    get(key: string): string | null;

    set(key: string, value: string): void;

    remove(key: string): void;
}

const token: string = "token"

class LocalStorage implements ILocalStorage {
    public get(key: string): string | null {
        return localStorage.getItem(key);
    }

    public set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }

    public getToken(): string | null {
        return localStorage.getItem(token);
    }

    public setToken(value: any) {
        localStorage.setItem(token, value);
    }

    public cleanToken() {
        localStorage.removeItem(token);
    }

}

const storage = new LocalStorage();

export default storage;
