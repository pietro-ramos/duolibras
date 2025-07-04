/**
 * Hook customizado para gerenciar estado de loading e error nas APIs
 */

import { useState } from 'react';

interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    total?: number;
}

/**
 * Hook para gerenciar estado de loading e error
 */
export function useApiState() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const execute = async <T>(apiCall: () => Promise<ApiResponse<T>>): Promise<T | null> => {
        setLoading(true);
        setError(null);
        
        try {
            const result = await apiCall();
            
            if (result.success && result.data) {
                return result.data;
            } else {
                setError(result.error || 'Erro desconhecido');
                return null;
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
            setError(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    };
    
    const clearError = () => setError(null);
    
    return { loading, error, execute, clearError };
}
