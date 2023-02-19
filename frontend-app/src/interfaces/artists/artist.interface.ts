export interface Artist {
    id?: number | null;
    picture?: string | null;
    code: string;
    name: string;
    surname?: string | null;
    country: string;
    email?: string | null;
    prefix?: string | null;
    phone?: string | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    deleted_at?: Date | null;
}

export interface ArtistList {
    artists: Artist[];
    count: number;
}

export const ArtistDefault = {
    id: null,
    picture: null,
    code: '',
    name: '',
    surname: null,
    country: 'ES',
    email: null,
    prefix: null,
    phone: null,
    created_at: null,
    updated_at: null,
    deleted_at: null,
}