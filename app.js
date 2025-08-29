body {
    font-family: 'Inter', sans-serif;
    background-color: #0F172A;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}
.container {
    max-width: 800px;
}
.spinner {
    border: 4px solid rgba(255, 255, 255, 0.2);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #60a5fa;
    animation: spin 1s ease infinite;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.result-card {
    background-color: #1e293b;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.history-item {
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: #334155;
    border-radius: 9999px;
    font-weight: 500;
    color: #d1d5db;
    transition: background-color 0.2s;
}
.history-item:hover {
    background-color: #475569;
}
.translation-table th, .translation-table td {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #334155;
}
.translation-table th {
    text-align: left;
    font-weight: 700;
    color: #94a3b8;
}
.translation-table tr:last-child td {
    border-bottom: none;
}
