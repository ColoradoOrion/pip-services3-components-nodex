/** @module state */

import { IStateStore } from "./IStateStore";
import { StateValue } from "./StateValue";

/**
 * Dummy state store implementation that doesn't do anything.
 * 
 * It can be used in testing or in situations when state management is not required
 * but shall be disabled.
 * 
 * @see [[ICache]]
 */
 export class NullStateStore implements IStateStore {
    /**
     * Loads state from the store using its key.
     * If value is missing in the stored it returns null.
     * 
     * @param correlationId     (optional) transaction id to trace execution through call chain.
     * @param key               a unique state key.
     * @returns                 the state value or <code>null</code> if value wasn't found.
     */
    public async load<T>(correlationId: string, key: string): Promise<T> {
        return null;
    }

    /**
     * Loads an array of states from the store using their keys.
     * 
     * @param correlationId     (optional) transaction id to trace execution through call chain.
     * @param keys              unique state keys.
     * @returns                 an array with state values and their corresponding keys.
     */
    public async loadBulk<T>(correlationId: string, keys: string[]): Promise<StateValue<T>[]> {
        return [];
    }

    /**
     * Saves state into the store.
     * 
     * @param correlationId     (optional) transaction id to trace execution through call chain.
     * @param key               a unique state key.
     * @param value             a state value.
     * @returns                 The state that was stored in the store.
     */
    public async save<T>(correlationId: string, key: string, value: any): Promise<T> {
        return value;
    }

    /**
     * Deletes a state from the store by its key.
     * 
     * @param correlationId     (optional) transaction id to trace execution through call chain.
     * @param key               a unique value key.
     */
    public async delete<T>(correlationId: string, key: string): Promise<T> {
        return null;
    }
}
