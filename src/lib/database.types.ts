export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          email: string;
          avatar_url: string | null;
          role: 'user' | 'admin';
          company: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name?: string;
          email: string;
          avatar_url?: string | null;
          role?: 'user' | 'admin';
          company?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          avatar_url?: string | null;
          role?: 'user' | 'admin';
          company?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      workflows: {
        Row: {
          id: string;
          name: string;
          description: string;
          category: string;
          difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
          runtime: string;
          downloads: number;
          rating: number;
          reviews: number;
          tags: string[];
          pricing: 'Free' | 'Premium';
          steps: Json;
          env_vars: Json;
          integrations: string[];
          patch_notes: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          category: string;
          difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
          runtime?: string;
          downloads?: number;
          rating?: number;
          reviews?: number;
          tags?: string[];
          pricing?: 'Free' | 'Premium';
          steps?: Json;
          env_vars?: Json;
          integrations?: string[];
          patch_notes?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          category?: string;
          difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
          runtime?: string;
          downloads?: number;
          rating?: number;
          reviews?: number;
          tags?: string[];
          pricing?: 'Free' | 'Premium';
          steps?: Json;
          env_vars?: Json;
          integrations?: string[];
          patch_notes?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      agents: {
        Row: {
          id: string;
          name: string;
          type: 'SDR' | 'Support' | 'Operations';
          description: string;
          features: string[];
          status: 'Popular' | 'New' | 'Featured';
          deployment: 'Managed' | 'Self-hosted' | 'Hybrid';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          type: 'SDR' | 'Support' | 'Operations';
          description: string;
          features?: string[];
          status?: 'Popular' | 'New' | 'Featured';
          deployment?: 'Managed' | 'Self-hosted' | 'Hybrid';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          type?: 'SDR' | 'Support' | 'Operations';
          description?: string;
          features?: string[];
          status?: 'Popular' | 'New' | 'Featured';
          deployment?: 'Managed' | 'Self-hosted' | 'Hybrid';
          created_at?: string;
          updated_at?: string;
        };
      };
      assets: {
        Row: {
          id: string;
          name: string;
          type: 'Prompt Pack' | 'Dataset' | 'Playbook' | 'Creative Bundle';
          description: string;
          category: string;
          downloads: number;
          rating: number;
          pricing: 'Free' | 'Premium';
          file_size: string | null;
          format: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          type: 'Prompt Pack' | 'Dataset' | 'Playbook' | 'Creative Bundle';
          description: string;
          category: string;
          downloads?: number;
          rating?: number;
          pricing?: 'Free' | 'Premium';
          file_size?: string | null;
          format?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          type?: 'Prompt Pack' | 'Dataset' | 'Playbook' | 'Creative Bundle';
          description?: string;
          category?: string;
          downloads?: number;
          rating?: number;
          pricing?: 'Free' | 'Premium';
          file_size?: string | null;
          format?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      case_studies: {
        Row: {
          id: string;
          title: string;
          company: string;
          industry: string;
          challenge: string;
          solution: string;
          results: Json;
          image: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          company: string;
          industry: string;
          challenge: string;
          solution: string;
          results?: Json;
          image: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          company?: string;
          industry?: string;
          challenge?: string;
          solution?: string;
          results?: Json;
          image?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          excerpt: string;
          content: string;
          category: string;
          author: string;
          published_at: string;
          read_time: string;
          image: string;
          tags: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          excerpt: string;
          content: string;
          category: string;
          author: string;
          published_at?: string;
          read_time?: string;
          image: string;
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          category?: string;
          author?: string;
          published_at?: string;
          read_time?: string;
          image?: string;
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          role: string;
          company: string;
          quote: string;
          avatar: string;
          rating: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          role: string;
          company: string;
          quote: string;
          avatar: string;
          rating?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          role?: string;
          company?: string;
          quote?: string;
          avatar?: string;
          rating?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      guides: {
        Row: {
          id: string;
          title: string;
          description: string;
          category: string;
          pages: number;
          read_time: string;
          rating: number;
          downloads: number;
          image: string;
          content: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          category: string;
          pages?: number;
          read_time?: string;
          rating?: number;
          downloads?: number;
          image: string;
          content: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          category?: string;
          pages?: number;
          read_time?: string;
          rating?: number;
          downloads?: number;
          image?: string;
          content?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      faqs: {
        Row: {
          id: string;
          question: string;
          answer: string;
          category: string;
          order_index: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          question: string;
          answer: string;
          category: string;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          question?: string;
          answer?: string;
          category?: string;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          subject: string;
          message: string;
          type: 'general' | 'sales' | 'support' | 'partnership';
          status: 'pending' | 'in_progress' | 'resolved';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string | null;
          subject: string;
          message: string;
          type?: 'general' | 'sales' | 'support' | 'partnership';
          status?: 'pending' | 'in_progress' | 'resolved';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          company?: string | null;
          subject?: string;
          message?: string;
          type?: 'general' | 'sales' | 'support' | 'partnership';
          status?: 'pending' | 'in_progress' | 'resolved';
          created_at?: string;
          updated_at?: string;
        };
      };
      pilot_applications: {
        Row: {
          id: string;
          use_case: string;
          stack: string;
          data_access: string;
          timeline: string;
          company: string;
          email: string;
          name: string;
          status: 'pending' | 'approved' | 'rejected';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          use_case: string;
          stack: string;
          data_access: string;
          timeline: string;
          company: string;
          email: string;
          name: string;
          status?: 'pending' | 'approved' | 'rejected';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          use_case?: string;
          stack?: string;
          data_access?: string;
          timeline?: string;
          company?: string;
          email?: string;
          name?: string;
          status?: 'pending' | 'approved' | 'rejected';
          created_at?: string;
          updated_at?: string;
        };
      };
      user_workflows: {
        Row: {
          id: string;
          user_id: string;
          workflow_id: string;
          status: 'deployed' | 'paused' | 'draft';
          config: Json;
          last_run: string | null;
          runs_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          workflow_id: string;
          status?: 'deployed' | 'paused' | 'draft';
          config?: Json;
          last_run?: string | null;
          runs_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          workflow_id?: string;
          status?: 'deployed' | 'paused' | 'draft';
          config?: Json;
          last_run?: string | null;
          runs_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      workflow_reviews: {
        Row: {
          id: string;
          user_id: string;
          workflow_id: string;
          rating: number;
          comment: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          workflow_id: string;
          rating: number;
          comment?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          workflow_id?: string;
          rating?: number;
          comment?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_: string]: never;
    };
    Functions: {
      [_: string]: never;
    };
    Enums: {
      [_: string]: never;
    };
  };
}
