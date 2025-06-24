var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// index_v2.js
var loginPage = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u8BA2\u9605\u7BA1\u7406\u7CFB\u7EDF</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    .login-container {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }
    .login-box {
      backdrop-filter: blur(8px);
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      transition: all 0.3s;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    .input-field {
      transition: all 0.3s;
      border: 1px solid #e2e8f0;
    }
    .input-field:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.25);
    }
  </style>
</head>
<body class="login-container flex items-center justify-center">
  <div class="login-box p-8 rounded-xl w-full max-w-md">
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold text-gray-800"><i class="fas fa-calendar-check mr-2"></i>\u8BA2\u9605\u7BA1\u7406\u7CFB\u7EDF</h1>
      <p class="text-gray-600 mt-2">\u767B\u5F55\u7BA1\u7406\u60A8\u7684\u8BA2\u9605\u63D0\u9192</p>
    </div>
    
    <form id="loginForm" class="space-y-6">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700 mb-1">
          <i class="fas fa-user mr-2"></i>\u7528\u6237\u540D
        </label>
        <input type="text" id="username" name="username" required
          class="input-field w-full px-4 py-3 rounded-lg text-gray-700 focus:outline-none">
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
          <i class="fas fa-lock mr-2"></i>\u5BC6\u7801
        </label>
        <input type="password" id="password" name="password" required
          class="input-field w-full px-4 py-3 rounded-lg text-gray-700 focus:outline-none">
      </div>
      
      <button type="submit" 
        class="btn-primary w-full py-3 rounded-lg text-white font-medium focus:outline-none">
        <i class="fas fa-sign-in-alt mr-2"></i>\u767B\u5F55
      </button>
      
      <div id="errorMsg" class="text-red-500 text-center"></div>
    </form>
  </div>
  
  <script>
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      const button = e.target.querySelector('button');
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>\u767B\u5F55\u4E2D...';
      button.disabled = true;
      
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        
        const result = await response.json();
        
        if (result.success) {
          window.location.href = '/admin';
        } else {
          document.getElementById('errorMsg').textContent = result.message || '\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF';
          button.innerHTML = originalContent;
          button.disabled = false;
        }
      } catch (error) {
        document.getElementById('errorMsg').textContent = '\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5';
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    });
  <\/script>
</body>
</html>
`;
var adminPage = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u8BA2\u9605\u7BA1\u7406\u7CFB\u7EDF</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); transition: all 0.3s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-danger { background: linear-gradient(135deg, #f87171 0%, #dc2626 100%); transition: all 0.3s; }
    .btn-danger:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-success { background: linear-gradient(135deg, #34d399 0%, #059669 100%); transition: all 0.3s; }
    .btn-success:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-warning { background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%); transition: all 0.3s; }
    .btn-warning:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .table-container { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .modal-container { backdrop-filter: blur(8px); }
    .readonly-input { background-color: #f8fafc; border-color: #e2e8f0; cursor: not-allowed; }
    .error-message { font-size: 0.875rem; margin-top: 0.25rem; display: none; }
    .error-message.show { display: block; }
    
    /* Toast \u6837\u5F0F */
    .toast {
      position: fixed; top: 20px; right: 20px; padding: 12px 20px; border-radius: 8px;
      color: white; font-weight: 500; z-index: 1000; transform: translateX(400px);
      transition: all 0.3s ease-in-out; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .toast.show { transform: translateX(0); }
    .toast.success { background-color: #10b981; }
    .toast.error { background-color: #ef4444; }
    .toast.info { background-color: #3b82f6; }
    .toast.warning { background-color: #f59e0b; }
  </style>
</head>
<body class="bg-gray-100 min-h-screen">
  <div id="toast-container"></div>

  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <i class="fas fa-calendar-check text-indigo-600 text-2xl mr-2"></i>
          <span class="font-bold text-xl text-gray-800">\u8BA2\u9605\u7BA1\u7406\u7CFB\u7EDF</span>
        </div>
        <div class="flex items-center space-x-4">
          <a href="/admin" class="text-indigo-600 border-b-2 border-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-list mr-1"></i>\u8BA2\u9605\u5217\u8868
          </a>
          <a href="/admin/config" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-cog mr-1"></i>\u7CFB\u7EDF\u914D\u7F6E
          </a>
          <a href="/api/logout" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-sign-out-alt mr-1"></i>\u9000\u51FA\u767B\u5F55
          </a>
        </div>
      </div>
    </div>
  </nav>
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">\u8BA2\u9605\u5217\u8868</h2>
      <div class="flex space-x-2">
        <button id="addSubscriptionBtn" class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <i class="fas fa-plus mr-2"></i>\u6DFB\u52A0\u65B0\u8BA2\u9605
        </button>
      </div>
    </div>
    
    <div class="table-container bg-white rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">\u540D\u79F0</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">\u7C7B\u578B</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              \u5230\u671F\u65F6\u95F4 <i class="fas fa-sort-up ml-1 text-indigo-500" title="\u6309\u5230\u671F\u65F6\u95F4\u5347\u5E8F\u6392\u5217"></i>
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">\u63D0\u9192\u8BBE\u7F6E</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">\u72B6\u6001</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">\u64CD\u4F5C</th>
          </tr>
        </thead>
        <tbody id="subscriptionsBody" class="bg-white divide-y divide-gray-200">
        </tbody>
      </table>
    </div>
  </div>

  <!-- \u6DFB\u52A0/\u7F16\u8F91\u8BA2\u9605\u7684\u6A21\u6001\u6846 -->
  <div id="subscriptionModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 modal-container hidden flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
      <div class="bg-gray-50 px-6 py-4 border-b border-gray-200 rounded-t-lg">
        <div class="flex items-center justify-between">
          <h3 id="modalTitle" class="text-lg font-medium text-gray-900">\u6DFB\u52A0\u65B0\u8BA2\u9605</h3>
          <button id="closeModal" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
      </div>
      
      <form id="subscriptionForm" class="p-6 space-y-6">
        <input type="hidden" id="subscriptionId">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">\u8BA2\u9605\u540D\u79F0 *</label>
            <input type="text" id="name" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <div class="error-message text-red-500"></div>
          </div>
          
          <div>
            <label for="customType" class="block text-sm font-medium text-gray-700 mb-1">\u8BA2\u9605\u7C7B\u578B</label>
            <input type="text" id="customType" placeholder="\u4F8B\u5982\uFF1A\u6D41\u5A92\u4F53\u3001\u4E91\u670D\u52A1\u3001\u8F6F\u4EF6\u7B49"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <div class="error-message text-red-500"></div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label for="startDate" class="block text-sm font-medium text-gray-700 mb-1">\u5F00\u59CB\u65E5\u671F</label>
            <input type="date" id="startDate"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <div class="error-message text-red-500"></div>
          </div>
          
          <div>
            <label for="periodValue" class="block text-sm font-medium text-gray-700 mb-1">\u5468\u671F\u6570\u503C *</label>
            <input type="number" id="periodValue" min="1" value="1" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <div class="error-message text-red-500"></div>
          </div>
          
          <div>
            <label for="periodUnit" class="block text-sm font-medium text-gray-700 mb-1">\u5468\u671F\u5355\u4F4D *</label>
            <select id="periodUnit" required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="day">\u5929</option>
              <option value="month" selected>\u6708</option>
              <option value="year">\u5E74</option>
            </select>
            <div class="error-message text-red-500"></div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="expiryDate" class="block text-sm font-medium text-gray-700 mb-1">\u5230\u671F\u65E5\u671F *</label>
            <input type="date" id="expiryDate" required
              class="readonly-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none">
            <div class="error-message text-red-500"></div>
          </div>
          
          <div class="flex items-end">
            <button type="button" id="calculateExpiryBtn" 
              class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium h-10">
              <i class="fas fa-calculator mr-2"></i>\u81EA\u52A8\u8BA1\u7B97\u5230\u671F\u65E5\u671F
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="reminderDays" class="block text-sm font-medium text-gray-700 mb-1">\u63D0\u524D\u63D0\u9192\u5929\u6570</label>
            <input type="number" id="reminderDays" min="0" value="7"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <p class="text-xs text-gray-500 mt-1">0 = \u4EC5\u5230\u671F\u65E5\u5F53\u5929\u63D0\u9192\uFF0C1+ = \u63D0\u524DN\u5929\u5F00\u59CB\u63D0\u9192</p>
            <div class="error-message text-red-500"></div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">\u9009\u9879\u8BBE\u7F6E</label>
            <div class="space-y-2">
              <label class="inline-flex items-center">
                <input type="checkbox" id="isActive" checked 
                  class="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">\u542F\u7528\u8BA2\u9605</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" id="autoRenew" checked 
                  class="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">\u81EA\u52A8\u7EED\u8BA2</span>
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <label for="notes" class="block text-sm font-medium text-gray-700 mb-1">\u5907\u6CE8</label>
          <textarea id="notes" rows="3" placeholder="\u53EF\u6DFB\u52A0\u76F8\u5173\u5907\u6CE8\u4FE1\u606F..."
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          <div class="error-message text-red-500"></div>
        </div>
        
        <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button type="button" id="cancelBtn" 
            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            \u53D6\u6D88
          </button>
          <button type="submit" 
            class="btn-primary text-white px-4 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-save mr-2"></i>\u4FDD\u5B58
          </button>
        </div>
      </form>
    </div>
  </div>

  <script>
    function showToast(message, type = 'success', duration = 3000) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'toast ' + type;
      
      const icon = type === 'success' ? 'check-circle' :
                   type === 'error' ? 'exclamation-circle' :
                   type === 'warning' ? 'exclamation-triangle' : 'info-circle';
      
      toast.innerHTML = '<div class="flex items-center"><i class="fas fa-' + icon + ' mr-2"></i><span>' + message + '</span></div>';
      
      container.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          if (container.contains(toast)) {
            container.removeChild(toast);
          }
        }, 300);
      }, duration);
    }

    function showFieldError(fieldId, message) {
      const field = document.getElementById(fieldId);
      const errorDiv = field.parentElement.querySelector('.error-message');
      if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
        field.classList.add('border-red-500');
      }
    }

    function clearFieldErrors() {
      document.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
      });
      document.querySelectorAll('.border-red-500').forEach(el => {
        el.classList.remove('border-red-500');
      });
    }

    function validateForm() {
      clearFieldErrors();
      let isValid = true;

      const name = document.getElementById('name').value.trim();
      if (!name) {
        showFieldError('name', '\u8BF7\u8F93\u5165\u8BA2\u9605\u540D\u79F0');
        isValid = false;
      }

      const periodValue = document.getElementById('periodValue').value;
      if (!periodValue || periodValue < 1) {
        showFieldError('periodValue', '\u5468\u671F\u6570\u503C\u5FC5\u987B\u5927\u4E8E0');
        isValid = false;
      }

      const expiryDate = document.getElementById('expiryDate').value;
      if (!expiryDate) {
        showFieldError('expiryDate', '\u8BF7\u9009\u62E9\u5230\u671F\u65E5\u671F');
        isValid = false;
      }

      const reminderDays = document.getElementById('reminderDays').value;
      if (reminderDays === '' || reminderDays < 0) {
        showFieldError('reminderDays', '\u63D0\u9192\u5929\u6570\u4E0D\u80FD\u4E3A\u8D1F\u6570');
        isValid = false;
      }

      return isValid;
    }

    // \u83B7\u53D6\u6240\u6709\u8BA2\u9605\u5E76\u6309\u5230\u671F\u65F6\u95F4\u6392\u5E8F
    async function loadSubscriptions() {
      try {
        const tbody = document.getElementById('subscriptionsBody');
        tbody.innerHTML = '<tr><td colspan="6" class="text-center py-4"><i class="fas fa-spinner fa-spin mr-2"></i>\u52A0\u8F7D\u4E2D...</td></tr>';
        
        const response = await fetch('/api/subscriptions');
        const data = await response.json();
        
        tbody.innerHTML = '';
        
        if (data.length === 0) {
          tbody.innerHTML = '<tr><td colspan="6" class="text-center py-4 text-gray-500">\u6CA1\u6709\u8BA2\u9605\u6570\u636E</td></tr>';
          return;
        }
        
        // \u6309\u5230\u671F\u65F6\u95F4\u5347\u5E8F\u6392\u5E8F\uFF08\u6700\u65E9\u5230\u671F\u7684\u5728\u524D\uFF09
        data.sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
        
        data.forEach(subscription => {
          const row = document.createElement('tr');
          row.className = subscription.isActive === false ? 'hover:bg-gray-50 bg-gray-100' : 'hover:bg-gray-50';
          
          const expiryDate = new Date(subscription.expiryDate);
          const now = new Date();
          const daysDiff = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
          
          let statusHtml = '';
          if (!subscription.isActive) {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-gray-500"><i class="fas fa-pause-circle mr-1"></i>\u5DF2\u505C\u7528</span>';
          } else if (daysDiff < 0) {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-red-500"><i class="fas fa-exclamation-circle mr-1"></i>\u5DF2\u8FC7\u671F</span>';
          } else if (daysDiff <= (subscription.reminderDays || 7)) {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-yellow-500"><i class="fas fa-exclamation-triangle mr-1"></i>\u5373\u5C06\u5230\u671F</span>';
          } else {
            statusHtml = '<span class="px-2 py-1 text-xs font-medium rounded-full text-white bg-green-500"><i class="fas fa-check-circle mr-1"></i>\u6B63\u5E38</span>';
          }
          
          let periodText = '';
          if (subscription.periodValue && subscription.periodUnit) {
            const unitMap = { day: '\u5929', month: '\u6708', year: '\u5E74' };
            periodText = subscription.periodValue + ' ' + (unitMap[subscription.periodUnit] || subscription.periodUnit);
          }
          
          const autoRenewIcon = subscription.autoRenew !== false ? 
            '<i class="fas fa-sync-alt text-blue-500 ml-1" title="\u81EA\u52A8\u7EED\u8BA2"></i>' : 
            '<i class="fas fa-ban text-gray-400 ml-1" title="\u4E0D\u81EA\u52A8\u7EED\u8BA2"></i>';
          
          row.innerHTML = 
            '<td class="px-6 py-4 whitespace-nowrap">' + 
              '<div class="text-sm font-medium text-gray-900">' + subscription.name + '</div>' +
              (subscription.notes ? '<div class="text-xs text-gray-500">' + subscription.notes + '</div>' : '') +
            '</td>' +
            '<td class="px-6 py-4 whitespace-nowrap">' + 
              '<div class="text-sm text-gray-900">' + 
                '<i class="fas fa-tag mr-1"></i>' + (subscription.customType || '\u5176\u4ED6') + 
              '</div>' +
              (periodText ? '<div class="text-xs text-gray-500">\u5468\u671F: ' + periodText + autoRenewIcon + '</div>' : '') +
            '</td>' +
            '<td class="px-6 py-4 whitespace-nowrap">' + 
              '<div class="text-sm text-gray-900">' + new Date(subscription.expiryDate).toLocaleDateString() + '</div>' +
              '<div class="text-xs text-gray-500">' + (daysDiff < 0 ? '\u5DF2\u8FC7\u671F' + Math.abs(daysDiff) + '\u5929' : '\u8FD8\u5269' + daysDiff + '\u5929') + '</div>' +
              (subscription.startDate ? '<div class="text-xs text-gray-500">\u5F00\u59CB: ' + new Date(subscription.startDate).toLocaleDateString() + '</div>' : '') +
            '</td>' +
            '<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">' + 
              '<div><i class="fas fa-bell mr-1"></i>\u63D0\u524D' + (subscription.reminderDays || 0) + '\u5929</div>' +
              (subscription.reminderDays === 0 ? '<div class="text-xs text-gray-500">\u4EC5\u5230\u671F\u65E5\u63D0\u9192</div>' : '') +
            '</td>' +
            '<td class="px-6 py-4 whitespace-nowrap">' + statusHtml + '</td>' +
            '<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">' +
              '<div class="flex flex-wrap gap-1">' +
                '<button class="edit btn-primary text-white px-2 py-1 rounded text-xs" data-id="' + subscription.id + '"><i class="fas fa-edit mr-1"></i>\u7F16\u8F91</button>' +
                '<button class="delete btn-danger text-white px-2 py-1 rounded text-xs" data-id="' + subscription.id + '"><i class="fas fa-trash-alt mr-1"></i>\u5220\u9664</button>' +
                (subscription.isActive ? 
                  '<button class="toggle-status btn-warning text-white px-2 py-1 rounded text-xs" data-id="' + subscription.id + '" data-action="deactivate"><i class="fas fa-pause-circle mr-1"></i>\u505C\u7528</button>' : 
                  '<button class="toggle-status btn-success text-white px-2 py-1 rounded text-xs" data-id="' + subscription.id + '" data-action="activate"><i class="fas fa-play-circle mr-1"></i>\u542F\u7528</button>') +
              '</div>' +
            '</td>';
          
          tbody.appendChild(row);
        });
        
        document.querySelectorAll('.edit').forEach(button => {
          button.addEventListener('click', editSubscription);
        });
        
        document.querySelectorAll('.delete').forEach(button => {
          button.addEventListener('click', deleteSubscription);
        });
        
        document.querySelectorAll('.toggle-status').forEach(button => {
          button.addEventListener('click', toggleSubscriptionStatus);
        });
      } catch (error) {
        console.error('\u52A0\u8F7D\u8BA2\u9605\u5931\u8D25:', error);
        const tbody = document.getElementById('subscriptionsBody');
        tbody.innerHTML = '<tr><td colspan="6" class="text-center py-4 text-red-500"><i class="fas fa-exclamation-circle mr-2"></i>\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5</td></tr>';
        showToast('\u52A0\u8F7D\u8BA2\u9605\u5217\u8868\u5931\u8D25', 'error');
      }
    }
    
    async function toggleSubscriptionStatus(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      const action = e.target.dataset.action || e.target.parentElement.dataset.action;
      const isActivate = action === 'activate';
      
      const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>' + (isActivate ? '\u542F\u7528\u4E2D...' : '\u505C\u7528\u4E2D...');
      button.disabled = true;
      
      try {
        const response = await fetch('/api/subscriptions/' + id + '/toggle-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isActive: isActivate })
        });
        
        if (response.ok) {
          showToast((isActivate ? '\u542F\u7528' : '\u505C\u7528') + '\u6210\u529F', 'success');
          loadSubscriptions();
        } else {
          const error = await response.json();
          showToast((isActivate ? '\u542F\u7528' : '\u505C\u7528') + '\u5931\u8D25: ' + (error.message || '\u672A\u77E5\u9519\u8BEF'), 'error');
          button.innerHTML = originalContent;
          button.disabled = false;
        }
      } catch (error) {
        console.error((isActivate ? '\u542F\u7528' : '\u505C\u7528') + '\u8BA2\u9605\u5931\u8D25:', error);
        showToast((isActivate ? '\u542F\u7528' : '\u505C\u7528') + '\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5', 'error');
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    }
    
    document.getElementById('addSubscriptionBtn').addEventListener('click', () => {
      document.getElementById('modalTitle').textContent = '\u6DFB\u52A0\u65B0\u8BA2\u9605';
      document.getElementById('subscriptionModal').classList.remove('hidden');
      
      document.getElementById('subscriptionForm').reset();
      document.getElementById('subscriptionId').value = '';
      clearFieldErrors();
      
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('startDate').value = today;
      document.getElementById('reminderDays').value = '7';
      document.getElementById('isActive').checked = true;
      document.getElementById('autoRenew').checked = true;
      
      calculateExpiryDate();
      setupModalEventListeners();
    });
    
    function setupModalEventListeners() {
      document.getElementById('calculateExpiryBtn').removeEventListener('click', calculateExpiryDate);
      document.getElementById('calculateExpiryBtn').addEventListener('click', calculateExpiryDate);
      
      ['startDate', 'periodValue', 'periodUnit'].forEach(id => {
        const element = document.getElementById(id);
        element.removeEventListener('change', calculateExpiryDate);
        element.addEventListener('change', calculateExpiryDate);
      });
      
      document.getElementById('cancelBtn').addEventListener('click', () => {
        document.getElementById('subscriptionModal').classList.add('hidden');
      });
    }
    
    function calculateExpiryDate() {
      const startDate = document.getElementById('startDate').value;
      const periodValue = parseInt(document.getElementById('periodValue').value);
      const periodUnit = document.getElementById('periodUnit').value;
      
      if (!startDate || !periodValue || !periodUnit) {
        return;
      }
      
      const start = new Date(startDate);
      const expiry = new Date(start);
      
      if (periodUnit === 'day') {
        expiry.setDate(start.getDate() + periodValue);
      } else if (periodUnit === 'month') {
        expiry.setMonth(start.getMonth() + periodValue);
      } else if (periodUnit === 'year') {
        expiry.setFullYear(start.getFullYear() + periodValue);
      }
      
      document.getElementById('expiryDate').value = expiry.toISOString().split('T')[0];
    }
    
    document.getElementById('closeModal').addEventListener('click', () => {
      document.getElementById('subscriptionModal').classList.add('hidden');
    });
    
    document.getElementById('subscriptionModal').addEventListener('click', (event) => {
      if (event.target === document.getElementById('subscriptionModal')) {
        document.getElementById('subscriptionModal').classList.add('hidden');
      }
    });
    
    document.getElementById('subscriptionForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }
      
      const id = document.getElementById('subscriptionId').value;
      const subscription = {
        name: document.getElementById('name').value.trim(),
        customType: document.getElementById('customType').value.trim(),
        notes: document.getElementById('notes').value.trim() || '',
        isActive: document.getElementById('isActive').checked,
        autoRenew: document.getElementById('autoRenew').checked,
        startDate: document.getElementById('startDate').value,
        expiryDate: document.getElementById('expiryDate').value,
        periodValue: parseInt(document.getElementById('periodValue').value),
        periodUnit: document.getElementById('periodUnit').value,
        reminderDays: parseInt(document.getElementById('reminderDays').value) || 0
      };
      
      const submitButton = e.target.querySelector('button[type="submit"]');
      const originalContent = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>' + (id ? '\u66F4\u65B0\u4E2D...' : '\u4FDD\u5B58\u4E2D...');
      submitButton.disabled = true;
      
      try {
        const url = id ? '/api/subscriptions/' + id : '/api/subscriptions';
        const method = id ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(subscription)
        });
        
        const result = await response.json();
        
        if (result.success) {
          showToast((id ? '\u66F4\u65B0' : '\u6DFB\u52A0') + '\u8BA2\u9605\u6210\u529F', 'success');
          document.getElementById('subscriptionModal').classList.add('hidden');
          loadSubscriptions();
        } else {
          showToast((id ? '\u66F4\u65B0' : '\u6DFB\u52A0') + '\u8BA2\u9605\u5931\u8D25: ' + (result.message || '\u672A\u77E5\u9519\u8BEF'), 'error');
        }
      } catch (error) {
        console.error((id ? '\u66F4\u65B0' : '\u6DFB\u52A0') + '\u8BA2\u9605\u5931\u8D25:', error);
        showToast((id ? '\u66F4\u65B0' : '\u6DFB\u52A0') + '\u8BA2\u9605\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5', 'error');
      } finally {
        submitButton.innerHTML = originalContent;
        submitButton.disabled = false;
      }
    });
    
    async function editSubscription(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      
      try {
        const response = await fetch('/api/subscriptions/' + id);
        const subscription = await response.json();
        
        if (subscription) {
          document.getElementById('modalTitle').textContent = '\u7F16\u8F91\u8BA2\u9605';
          document.getElementById('subscriptionId').value = subscription.id;
          document.getElementById('name').value = subscription.name;
          document.getElementById('customType').value = subscription.customType || '';
          document.getElementById('notes').value = subscription.notes || '';
          document.getElementById('isActive').checked = subscription.isActive !== false;
          document.getElementById('autoRenew').checked = subscription.autoRenew !== false;
          document.getElementById('startDate').value = subscription.startDate ? subscription.startDate.split('T')[0] : '';
          document.getElementById('expiryDate').value = subscription.expiryDate ? subscription.expiryDate.split('T')[0] : '';
          document.getElementById('periodValue').value = subscription.periodValue || 1;
          document.getElementById('periodUnit').value = subscription.periodUnit || 'month';
          document.getElementById('reminderDays').value = subscription.reminderDays !== undefined ? subscription.reminderDays : 7;
          
          clearFieldErrors();
          document.getElementById('subscriptionModal').classList.remove('hidden');
          setupModalEventListeners();
        }
      } catch (error) {
        console.error('\u83B7\u53D6\u8BA2\u9605\u4FE1\u606F\u5931\u8D25:', error);
        showToast('\u83B7\u53D6\u8BA2\u9605\u4FE1\u606F\u5931\u8D25', 'error');
      }
    }
    
    async function deleteSubscription(e) {
      const id = e.target.dataset.id || e.target.parentElement.dataset.id;
      
      if (!confirm('\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u8BA2\u9605\u5417\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\u3002')) {
        return;
      }
      
      const button = e.target.tagName === 'BUTTON' ? e.target : e.target.parentElement;
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>\u5220\u9664\u4E2D...';
      button.disabled = true;
      
      try {
        const response = await fetch('/api/subscriptions/' + id, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          showToast('\u5220\u9664\u6210\u529F', 'success');
          loadSubscriptions();
        } else {
          const error = await response.json();
          showToast('\u5220\u9664\u5931\u8D25: ' + (error.message || '\u672A\u77E5\u9519\u8BEF'), 'error');
          button.innerHTML = originalContent;
          button.disabled = false;
        }
      } catch (error) {
        console.error('\u5220\u9664\u8BA2\u9605\u5931\u8D25:', error);
        showToast('\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5', 'error');
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    }
    
    window.addEventListener('load', loadSubscriptions);
  <\/script>
</body>
</html>
`;
var configPage = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u7CFB\u7EDF\u914D\u7F6E - \u8BA2\u9605\u7BA1\u7406\u7CFB\u7EDF</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
  <style>
    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); transition: all 0.3s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    .btn-secondary { background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%); transition: all 0.3s; }
    .btn-secondary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
    
    .toast {
      position: fixed; top: 20px; right: 20px; padding: 12px 20px; border-radius: 8px;
      color: white; font-weight: 500; z-index: 1000; transform: translateX(400px);
      transition: all 0.3s ease-in-out; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .toast.show { transform: translateX(0); }
    .toast.success { background-color: #10b981; }
    .toast.error { background-color: #ef4444; }
    .toast.info { background-color: #3b82f6; }
    .toast.warning { background-color: #f59e0b; }
    
    .config-section { 
      border: 1px solid #e5e7eb; 
      border-radius: 8px; 
      padding: 16px; 
      margin-bottom: 24px; 
    }
    .config-section.active { 
      background-color: #f8fafc; 
      border-color: #6366f1; 
    }
    .config-section.inactive { 
      background-color: #f9fafb; 
      opacity: 0.7; 
    }
  </style>
</head>
<body class="bg-gray-100 min-h-screen">
  <div id="toast-container"></div>

  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <i class="fas fa-calendar-check text-indigo-600 text-2xl mr-2"></i>
          <span class="font-bold text-xl text-gray-800">\u8BA2\u9605\u7BA1\u7406\u7CFB\u7EDF</span>
        </div>
        <div class="flex items-center space-x-4">
          <a href="/admin" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-list mr-1"></i>\u8BA2\u9605\u5217\u8868
          </a>
          <a href="/admin/config" class="text-indigo-600 border-b-2 border-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-cog mr-1"></i>\u7CFB\u7EDF\u914D\u7F6E
          </a>
          <a href="/api/logout" class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-sign-out-alt mr-1"></i>\u9000\u51FA\u767B\u5F55
          </a>
        </div>
      </div>
    </div>
  </nav>
  
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">\u7CFB\u7EDF\u914D\u7F6E</h2>
      
      <form id="configForm" class="space-y-8">
        <div class="border-b border-gray-200 pb-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">\u7BA1\u7406\u5458\u8D26\u6237</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="adminUsername" class="block text-sm font-medium text-gray-700">\u7528\u6237\u540D</label>
              <input type="text" id="adminUsername" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            <div>
              <label for="adminPassword" class="block text-sm font-medium text-gray-700">\u5BC6\u7801</label>
              <input type="password" id="adminPassword" placeholder="\u5982\u4E0D\u4FEE\u6539\u5BC6\u7801\uFF0C\u8BF7\u7559\u7A7A" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <p class="mt-1 text-sm text-gray-500">\u7559\u7A7A\u8868\u793A\u4E0D\u4FEE\u6539\u5F53\u524D\u5BC6\u7801</p>
            </div>
          </div>
        </div>
        
        <div class="border-b border-gray-200 pb-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">\u901A\u77E5\u8BBE\u7F6E</h3>
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-3">\u901A\u77E5\u65B9\u5F0F</label>
            <div class="flex space-x-6">
              <label class="inline-flex items-center">
                <input type="radio" name="notificationType" value="telegram" class="form-radio h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Telegram</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" name="notificationType" value="notifyx" class="form-radio h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked>
                <span class="ml-2 text-sm text-gray-700">NotifyX</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" name="notificationType" value="gotify" class="form-radio h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <span class="ml-2 text-sm text-gray-700">Gotify</span>
              </label>
            </div>
          </div>
          
          <div id="telegramConfig" class="config-section">
            <h4 class="text-md font-medium text-gray-900 mb-3">Telegram \u914D\u7F6E</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label for="tgBotToken" class="block text-sm font-medium text-gray-700">Bot Token</label>
                <input type="text" id="tgBotToken" placeholder="\u4ECE @BotFather \u83B7\u53D6" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
              <div>
                <label for="tgChatId" class="block text-sm font-medium text-gray-700">Chat ID</label>
                <input type="text" id="tgChatId" placeholder="\u53EF\u4ECE @userinfobot \u83B7\u53D6" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>
            <div class="flex justify-end">
              <button type="button" id="testTelegramBtn" class="btn-secondary text-white px-4 py-2 rounded-md text-sm font-medium">
                <i class="fas fa-paper-plane mr-2"></i>\u6D4B\u8BD5 Telegram \u901A\u77E5
              </button>
            </div>
          </div>
          
          <div id="notifyxConfig" class="config-section">
            <h4 class="text-md font-medium text-gray-900 mb-3">NotifyX \u914D\u7F6E</h4>
            <div class="mb-4">
              <label for="notifyxApiKey" class="block text-sm font-medium text-gray-700">API Key</label>
              <input type="text" id="notifyxApiKey" placeholder="\u4ECE NotifyX \u5E73\u53F0\u83B7\u53D6\u7684 API Key" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <p class="mt-1 text-sm text-gray-500">\u4ECE <a href="https://www.notifyx.cn/" target="_blank" class="text-indigo-600 hover:text-indigo-800">NotifyX\u5E73\u53F0</a> \u83B7\u53D6\u7684 API Key</p>
            </div>
            <div class="flex justify-end">
              <button type="button" id="testNotifyXBtn" class="btn-secondary text-white px-4 py-2 rounded-md text-sm font-medium">
                <i class="fas fa-paper-plane mr-2"></i>\u6D4B\u8BD5 NotifyX \u901A\u77E5
              </button>
            </div>
          </div>
          
          <div id="gotifyConfig" class="config-section">
            <h4 class="text-md font-medium text-gray-900 mb-3">Gotify \u914D\u7F6E</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label for="gotifyUrl" class="block text-sm font-medium text-gray-700">\u670D\u52A1\u5668 URL</label>
                <input type="text" id="gotifyUrl" placeholder="\u4F8B\u5982: https://gotify.example.com" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
              <div>
                <label for="gotifyToken" class="block text-sm font-medium text-gray-700">\u5E94\u7528 Token</label>
                <input type="text" id="gotifyToken" placeholder="Gotify \u5E94\u7528 Token" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>
            <div class="flex justify-end">
              <button type="button" id="testGotifyBtn" class="btn-secondary text-white px-4 py-2 rounded-md text-sm font-medium">
                <i class="fas fa-paper-plane mr-2"></i>\u6D4B\u8BD5 Gotify \u901A\u77E5
              </button>
            </div>
          </div>
        </div>
        
        <div class="flex justify-end">
          <button type="submit" class="btn-primary text-white px-6 py-2 rounded-md text-sm font-medium">
            <i class="fas fa-save mr-2"></i>\u4FDD\u5B58\u914D\u7F6E
          </button>
        </div>
      </form>
    </div>
  </div>

  <script>
    function showToast(message, type = 'success', duration = 3000) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'toast ' + type;
      
      const icon = type === 'success' ? 'check-circle' :
                   type === 'error' ? 'exclamation-circle' :
                   type === 'warning' ? 'exclamation-triangle' : 'info-circle';
      
      toast.innerHTML = '<div class="flex items-center"><i class="fas fa-' + icon + ' mr-2"></i><span>' + message + '</span></div>';
      
      container.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 100);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          if (container.contains(toast)) {
            container.removeChild(toast);
          }
        }, 300);
      }, duration);
    }

    async function loadConfig() {
      try {
        const response = await fetch('/api/config');
        const config = await response.json();
        
        document.getElementById('adminUsername').value = config.ADMIN_USERNAME || '';
        document.getElementById('tgBotToken').value = config.TG_BOT_TOKEN || '';
        document.getElementById('tgChatId').value = config.TG_CHAT_ID || '';
        document.getElementById('notifyxApiKey').value = config.NOTIFYX_API_KEY || '';
        document.getElementById('gotifyUrl').value = config.GOTIFY_URL || '';
        document.getElementById('gotifyToken').value = config.GOTIFY_TOKEN || '';
        
        const notificationType = config.NOTIFICATION_TYPE || 'notifyx';
        document.querySelector('input[name="notificationType"][value="' + notificationType + '"]').checked = true;
        
        toggleNotificationConfig(notificationType);
      } catch (error) {
        console.error('\u52A0\u8F7D\u914D\u7F6E\u5931\u8D25:', error);
        showToast('\u52A0\u8F7D\u914D\u7F6E\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5', 'error');
      }
    }
    
    function toggleNotificationConfig(type) {
      const telegramConfig = document.getElementById('telegramConfig');
      const notifyxConfig = document.getElementById('notifyxConfig');
      const gotifyConfig = document.getElementById('gotifyConfig');
      
      // \u5148\u9690\u85CF\u6240\u6709\u914D\u7F6E
      telegramConfig.classList.remove('active');
      telegramConfig.classList.add('inactive');
      notifyxConfig.classList.remove('active');
      notifyxConfig.classList.add('inactive');
      gotifyConfig.classList.remove('active');
      gotifyConfig.classList.add('inactive');
      
      // \u663E\u793A\u9009\u4E2D\u7684\u914D\u7F6E
      if (type === 'telegram') {
        telegramConfig.classList.remove('inactive');
        telegramConfig.classList.add('active');
      } else if (type === 'notifyx') {
        notifyxConfig.classList.remove('inactive');
        notifyxConfig.classList.add('active');
      } else if (type === 'gotify') {
        gotifyConfig.classList.remove('inactive');
        gotifyConfig.classList.add('active');
      }
    }
    
    document.querySelectorAll('input[name="notificationType"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        toggleNotificationConfig(e.target.value);
      });
    });
    
    document.getElementById('configForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const config = {
        ADMIN_USERNAME: document.getElementById('adminUsername').value.trim(),
        TG_BOT_TOKEN: document.getElementById('tgBotToken').value.trim(),
        TG_CHAT_ID: document.getElementById('tgChatId').value.trim(),
        NOTIFYX_API_KEY: document.getElementById('notifyxApiKey').value.trim(),
        GOTIFY_URL: document.getElementById('gotifyUrl').value.trim(),
        GOTIFY_TOKEN: document.getElementById('gotifyToken').value.trim(),
        NOTIFICATION_TYPE: document.querySelector('input[name="notificationType"]:checked').value
      };
      
      const passwordField = document.getElementById('adminPassword');
      if (passwordField.value.trim()) {
        config.ADMIN_PASSWORD = passwordField.value.trim();
      }
      
      const submitButton = e.target.querySelector('button[type="submit"]');
      const originalContent = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>\u4FDD\u5B58\u4E2D...';
      submitButton.disabled = true;
      
      try {
        const response = await fetch('/api/config', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(config)
        });
        
        const result = await response.json();
        
        if (result.success) {
          showToast('\u914D\u7F6E\u4FDD\u5B58\u6210\u529F', 'success');
          passwordField.value = '';
        } else {
          showToast('\u914D\u7F6E\u4FDD\u5B58\u5931\u8D25: ' + (result.message || '\u672A\u77E5\u9519\u8BEF'), 'error');
        }
      } catch (error) {
        console.error('\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25:', error);
        showToast('\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5', 'error');
      } finally {
        submitButton.innerHTML = originalContent;
        submitButton.disabled = false;
      }
    });
    
    async function testNotification(type) {
      const button = document.getElementById(type === 'telegram' ? 'testTelegramBtn' : (type === 'notifyx' ? 'testNotifyXBtn' : 'testGotifyBtn'));
      const originalContent = button.innerHTML;
      const serviceName = type === 'telegram' ? 'Telegram' : (type === 'notifyx' ? 'NotifyX' : 'Gotify');
      
      button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>\u6D4B\u8BD5\u4E2D...';
      button.disabled = true;
      
      try {
        showToast('\u6B63\u5728\u53D1\u9001\u6D4B\u8BD5\u901A\u77E5...', 'info');
        
        const testConfig = {
          TG_BOT_TOKEN: document.getElementById('tgBotToken').value.trim(),
          TG_CHAT_ID: document.getElementById('tgChatId').value.trim(),
          NOTIFYX_API_KEY: document.getElementById('notifyxApiKey').value.trim(),
          GOTIFY_URL: document.getElementById('gotifyUrl').value.trim(),
          GOTIFY_TOKEN: document.getElementById('gotifyToken').value.trim(),
          NOTIFICATION_TYPE: type
        };
        
        // \u9A8C\u8BC1\u5FC5\u8981\u7684\u914D\u7F6E
        if (type === 'telegram' && (!testConfig.TG_BOT_TOKEN || !testConfig.TG_CHAT_ID)) {
          showToast('\u8BF7\u5148\u586B\u5199 Telegram Bot Token \u548C Chat ID', 'warning');
          return;
        } else if (type === 'notifyx' && !testConfig.NOTIFYX_API_KEY) {
          showToast('\u8BF7\u5148\u586B\u5199 NotifyX API Key', 'warning');
          return;
        } else if (type === 'gotify' && (!testConfig.GOTIFY_URL || !testConfig.GOTIFY_TOKEN)) {
          showToast('\u8BF7\u5148\u586B\u5199 Gotify \u670D\u52A1\u5668 URL \u548C\u5E94\u7528 Token', 'warning');
          return;
        }
        
        const title = 'SubsTracker \u6D4B\u8BD5\u901A\u77E5';
        const content = '\u8FD9\u662F\u4E00\u6761\u6D4B\u8BD5\u901A\u77E5\uFF0C\u53D1\u9001\u65F6\u95F4: ' + new Date().toLocaleString();
        const description = '\u5982\u679C\u60A8\u6536\u5230\u8FD9\u6761\u901A\u77E5\uFF0C\u8BF4\u660E\u901A\u77E5\u914D\u7F6E\u6B63\u786E';
        
        const response = await fetch('/api/test-notification', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: type, ...testConfig })
        });
        
        const result = await response.json();
        
        if (result.success) {
          showToast(serviceName + ' \u901A\u77E5\u6D4B\u8BD5\u6210\u529F\uFF01', 'success');
        } else {
          showToast(serviceName + ' \u901A\u77E5\u6D4B\u8BD5\u5931\u8D25: ' + (result.message || '\u672A\u77E5\u9519\u8BEF'), 'error');
        }
      } catch (error) {
        console.error('\u6D4B\u8BD5\u901A\u77E5\u5931\u8D25:', error);
        showToast('\u6D4B\u8BD5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5', 'error');
      } finally {
        button.innerHTML = originalContent;
        button.disabled = false;
      }
    }
    
    document.getElementById('testTelegramBtn').addEventListener('click', () => {
      testNotification('telegram');
    });
    
    document.getElementById('testNotifyXBtn').addEventListener('click', () => {
      testNotification('notifyx');
    });
    
    document.getElementById('testGotifyBtn').addEventListener('click', () => {
      testNotification('gotify');
    });
    
    window.addEventListener('load', loadConfig);
  <\/script>
</body>
</html>
`;
var admin = {
  async handleRequest(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const token = getCookieValue(request.headers.get("Cookie"), "token");
    const config = await getConfig(env);
    const user = token ? await verifyJWT(token, config.JWT_SECRET) : null;
    if (!user) {
      return new Response("", {
        status: 302,
        headers: { "Location": "/" }
      });
    }
    if (pathname === "/admin/config") {
      return new Response(configPage, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }
    return new Response(adminPage, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
var api = {
  async handleRequest(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.slice(4);
    const method = request.method;
    const config = await getConfig(env);
    if (path === "/login" && method === "POST") {
      const body = await request.json();
      if (body.username === config.ADMIN_USERNAME && body.password === config.ADMIN_PASSWORD) {
        const token2 = await generateJWT(body.username, config.JWT_SECRET);
        return new Response(
          JSON.stringify({ success: true }),
          {
            headers: {
              "Content-Type": "application/json",
              "Set-Cookie": "token=" + token2 + "; HttpOnly; Path=/; SameSite=Strict; Max-Age=86400"
            }
          }
        );
      } else {
        return new Response(
          JSON.stringify({ success: false, message: "\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF" }),
          { headers: { "Content-Type": "application/json" } }
        );
      }
    }
    if (path === "/logout" && (method === "GET" || method === "POST")) {
      return new Response("", {
        status: 302,
        headers: {
          "Location": "/",
          "Set-Cookie": "token=; HttpOnly; Path=/; SameSite=Strict; Max-Age=0"
        }
      });
    }
    const token = getCookieValue(request.headers.get("Cookie"), "token");
    const user = token ? await verifyJWT(token, config.JWT_SECRET) : null;
    if (!user && path !== "/login") {
      return new Response(
        JSON.stringify({ success: false, message: "\u672A\u6388\u6743\u8BBF\u95EE" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
    if (path === "/config") {
      if (method === "GET") {
        const { JWT_SECRET, ADMIN_PASSWORD, ...safeConfig } = config;
        return new Response(
          JSON.stringify(safeConfig),
          { headers: { "Content-Type": "application/json" } }
        );
      }
      if (method === "POST") {
        try {
          const newConfig = await request.json();
          const updatedConfig = {
            ...config,
            ADMIN_USERNAME: newConfig.ADMIN_USERNAME || config.ADMIN_USERNAME,
            TG_BOT_TOKEN: newConfig.TG_BOT_TOKEN || "",
            TG_CHAT_ID: newConfig.TG_CHAT_ID || "",
            NOTIFYX_API_KEY: newConfig.NOTIFYX_API_KEY || "",
            GOTIFY_URL: newConfig.GOTIFY_URL || "",
            GOTIFY_TOKEN: newConfig.GOTIFY_TOKEN || "",
            NOTIFICATION_TYPE: newConfig.NOTIFICATION_TYPE || config.NOTIFICATION_TYPE
          };
          if (newConfig.ADMIN_PASSWORD) {
            updatedConfig.ADMIN_PASSWORD = newConfig.ADMIN_PASSWORD;
          }
          await env.SUBSCRIPTIONS_KV.put("config", JSON.stringify(updatedConfig));
          return new Response(
            JSON.stringify({ success: true }),
            { headers: { "Content-Type": "application/json" } }
          );
        } catch (error) {
          return new Response(
            JSON.stringify({ success: false, message: "\u66F4\u65B0\u914D\u7F6E\u5931\u8D25" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
          );
        }
      }
    }
    if (path === "/test-notification" && method === "POST") {
      try {
        const body = await request.json();
        let success = false;
        let message = "";
        if (body.type === "telegram") {
          const testConfig = {
            ...config,
            TG_BOT_TOKEN: body.TG_BOT_TOKEN,
            TG_CHAT_ID: body.TG_CHAT_ID
          };
          const content = "*\u6D4B\u8BD5\u901A\u77E5*\n\n\u8FD9\u662F\u4E00\u6761\u6D4B\u8BD5\u901A\u77E5\uFF0C\u7528\u4E8E\u9A8C\u8BC1Telegram\u901A\u77E5\u529F\u80FD\u662F\u5426\u6B63\u5E38\u5DE5\u4F5C\u3002\n\n\u53D1\u9001\u65F6\u95F4: " + (/* @__PURE__ */ new Date()).toLocaleString();
          success = await sendTelegramNotification(content, testConfig);
          message = success ? "Telegram\u901A\u77E5\u53D1\u9001\u6210\u529F" : "Telegram\u901A\u77E5\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E";
        } else if (body.type === "notifyx") {
          const testConfig = {
            ...config,
            NOTIFYX_API_KEY: body.NOTIFYX_API_KEY
          };
          const title = "\u6D4B\u8BD5\u901A\u77E5";
          const content = "## \u8FD9\u662F\u4E00\u6761\u6D4B\u8BD5\u901A\u77E5\n\n\u7528\u4E8E\u9A8C\u8BC1NotifyX\u901A\u77E5\u529F\u80FD\u662F\u5426\u6B63\u5E38\u5DE5\u4F5C\u3002\n\n\u53D1\u9001\u65F6\u95F4: " + (/* @__PURE__ */ new Date()).toLocaleString();
          const description = "\u6D4B\u8BD5NotifyX\u901A\u77E5\u529F\u80FD";
          success = await sendNotifyXNotification(title, content, description, testConfig);
          message = success ? "NotifyX\u901A\u77E5\u53D1\u9001\u6210\u529F" : "NotifyX\u901A\u77E5\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E";
        } else if (body.type === "gotify") {
          const testConfig = {
            ...config,
            GOTIFY_URL: body.GOTIFY_URL,
            GOTIFY_TOKEN: body.GOTIFY_TOKEN
          };
          const title = "\u6D4B\u8BD5\u901A\u77E5";
          const content = "\u8FD9\u662F\u4E00\u6761\u6D4B\u8BD5\u901A\u77E5\uFF0C\u7528\u4E8E\u9A8C\u8BC1Gotify\u901A\u77E5\u529F\u80FD\u662F\u5426\u6B63\u5E38\u5DE5\u4F5C\u3002\n\n\u53D1\u9001\u65F6\u95F4: " + (/* @__PURE__ */ new Date()).toLocaleString();
          success = await sendGotifyNotification(title, content, testConfig);
          message = success ? "Gotify\u901A\u77E5\u53D1\u9001\u6210\u529F" : "Gotify\u901A\u77E5\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E";
        }
        return new Response(
          JSON.stringify({ success, message }),
          { headers: { "Content-Type": "application/json" } }
        );
      } catch (error) {
        console.error("\u6D4B\u8BD5\u901A\u77E5\u5931\u8D25:", error);
        return new Response(
          JSON.stringify({ success: false, message: "\u6D4B\u8BD5\u901A\u77E5\u5931\u8D25: " + error.message }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }
    if (path === "/subscriptions") {
      if (method === "GET") {
        const subscriptions = await getAllSubscriptions(env);
        return new Response(
          JSON.stringify(subscriptions),
          { headers: { "Content-Type": "application/json" } }
        );
      }
      if (method === "POST") {
        const subscription = await request.json();
        const result = await createSubscription(subscription, env);
        return new Response(
          JSON.stringify(result),
          {
            status: result.success ? 201 : 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
    if (path.startsWith("/subscriptions/")) {
      const parts = path.split("/");
      const id = parts[2];
      if (parts[3] === "toggle-status" && method === "POST") {
        const body = await request.json();
        const result = await toggleSubscriptionStatus(id, body.isActive, env);
        return new Response(
          JSON.stringify(result),
          {
            status: result.success ? 200 : 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      if (method === "GET") {
        const subscription = await getSubscription(id, env);
        return new Response(
          JSON.stringify(subscription),
          { headers: { "Content-Type": "application/json" } }
        );
      }
      if (method === "PUT") {
        const subscription = await request.json();
        const result = await updateSubscription(id, subscription, env);
        return new Response(
          JSON.stringify(result),
          {
            status: result.success ? 200 : 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
      if (method === "DELETE") {
        const result = await deleteSubscription(id, env);
        return new Response(
          JSON.stringify(result),
          {
            status: result.success ? 200 : 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    }
    return new Response(
      JSON.stringify({ success: false, message: "\u672A\u627E\u5230\u8BF7\u6C42\u7684\u8D44\u6E90" }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }
};
async function getConfig(env) {
  try {
    const data = await env.SUBSCRIPTIONS_KV.get("config");
    const config = data ? JSON.parse(data) : {};
    return {
      ADMIN_USERNAME: config.ADMIN_USERNAME || "admin",
      ADMIN_PASSWORD: config.ADMIN_PASSWORD || "password",
      JWT_SECRET: config.JWT_SECRET || "your-secret-key",
      TG_BOT_TOKEN: config.TG_BOT_TOKEN || "",
      TG_CHAT_ID: config.TG_CHAT_ID || "",
      NOTIFYX_API_KEY: config.NOTIFYX_API_KEY || "",
      GOTIFY_URL: config.GOTIFY_URL || "",
      GOTIFY_TOKEN: config.GOTIFY_TOKEN || "",
      NOTIFICATION_TYPE: config.NOTIFICATION_TYPE || "notifyx"
    };
  } catch (error) {
    return {
      ADMIN_USERNAME: "admin",
      ADMIN_PASSWORD: "password",
      JWT_SECRET: "your-secret-key",
      TG_BOT_TOKEN: "",
      TG_CHAT_ID: "",
      NOTIFYX_API_KEY: "",
      GOTIFY_URL: "",
      GOTIFY_TOKEN: "",
      NOTIFICATION_TYPE: "notifyx"
    };
  }
}
__name(getConfig, "getConfig");
async function generateJWT(username, secret) {
  const header = { alg: "HS256", typ: "JWT" };
  const payload = { username, iat: Math.floor(Date.now() / 1e3) };
  const headerBase64 = btoa(JSON.stringify(header));
  const payloadBase64 = btoa(JSON.stringify(payload));
  const signatureInput = headerBase64 + "." + payloadBase64;
  const signature = await CryptoJS.HmacSHA256(signatureInput, secret);
  return headerBase64 + "." + payloadBase64 + "." + signature;
}
__name(generateJWT, "generateJWT");
async function verifyJWT(token, secret) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [headerBase64, payloadBase64, signature] = parts;
    const signatureInput = headerBase64 + "." + payloadBase64;
    const expectedSignature = await CryptoJS.HmacSHA256(signatureInput, secret);
    if (signature !== expectedSignature) return null;
    const payload = JSON.parse(atob(payloadBase64));
    return payload;
  } catch (error) {
    return null;
  }
}
__name(verifyJWT, "verifyJWT");
async function getAllSubscriptions(env) {
  try {
    const data = await env.SUBSCRIPTIONS_KV.get("subscriptions");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
}
__name(getAllSubscriptions, "getAllSubscriptions");
async function getSubscription(id, env) {
  const subscriptions = await getAllSubscriptions(env);
  return subscriptions.find((s) => s.id === id);
}
__name(getSubscription, "getSubscription");
async function createSubscription(subscription, env) {
  try {
    const subscriptions = await getAllSubscriptions(env);
    if (!subscription.name || !subscription.expiryDate) {
      return { success: false, message: "\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5" };
    }
    let expiryDate = new Date(subscription.expiryDate);
    const now = /* @__PURE__ */ new Date();
    if (expiryDate < now && subscription.periodValue && subscription.periodUnit) {
      while (expiryDate < now) {
        if (subscription.periodUnit === "day") {
          expiryDate.setDate(expiryDate.getDate() + subscription.periodValue);
        } else if (subscription.periodUnit === "month") {
          expiryDate.setMonth(expiryDate.getMonth() + subscription.periodValue);
        } else if (subscription.periodUnit === "year") {
          expiryDate.setFullYear(expiryDate.getFullYear() + subscription.periodValue);
        }
      }
      subscription.expiryDate = expiryDate.toISOString();
    }
    const newSubscription = {
      id: Date.now().toString(),
      name: subscription.name,
      customType: subscription.customType || "",
      startDate: subscription.startDate || null,
      expiryDate: subscription.expiryDate,
      periodValue: subscription.periodValue || 1,
      periodUnit: subscription.periodUnit || "month",
      reminderDays: subscription.reminderDays !== void 0 ? subscription.reminderDays : 7,
      notes: subscription.notes || "",
      isActive: subscription.isActive !== false,
      autoRenew: subscription.autoRenew !== false,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    subscriptions.push(newSubscription);
    await env.SUBSCRIPTIONS_KV.put("subscriptions", JSON.stringify(subscriptions));
    return { success: true, subscription: newSubscription };
  } catch (error) {
    return { success: false, message: "\u521B\u5EFA\u8BA2\u9605\u5931\u8D25" };
  }
}
__name(createSubscription, "createSubscription");
async function updateSubscription(id, subscription, env) {
  try {
    const subscriptions = await getAllSubscriptions(env);
    const index = subscriptions.findIndex((s) => s.id === id);
    if (index === -1) {
      return { success: false, message: "\u8BA2\u9605\u4E0D\u5B58\u5728" };
    }
    if (!subscription.name || !subscription.expiryDate) {
      return { success: false, message: "\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5" };
    }
    let expiryDate = new Date(subscription.expiryDate);
    const now = /* @__PURE__ */ new Date();
    if (expiryDate < now && subscription.periodValue && subscription.periodUnit) {
      while (expiryDate < now) {
        if (subscription.periodUnit === "day") {
          expiryDate.setDate(expiryDate.getDate() + subscription.periodValue);
        } else if (subscription.periodUnit === "month") {
          expiryDate.setMonth(expiryDate.getMonth() + subscription.periodValue);
        } else if (subscription.periodUnit === "year") {
          expiryDate.setFullYear(expiryDate.getFullYear() + subscription.periodValue);
        }
      }
      subscription.expiryDate = expiryDate.toISOString();
    }
    subscriptions[index] = {
      ...subscriptions[index],
      name: subscription.name,
      customType: subscription.customType || subscriptions[index].customType || "",
      startDate: subscription.startDate || subscriptions[index].startDate,
      expiryDate: subscription.expiryDate,
      periodValue: subscription.periodValue || subscriptions[index].periodValue || 1,
      periodUnit: subscription.periodUnit || subscriptions[index].periodUnit || "month",
      reminderDays: subscription.reminderDays !== void 0 ? subscription.reminderDays : subscriptions[index].reminderDays !== void 0 ? subscriptions[index].reminderDays : 7,
      notes: subscription.notes || "",
      isActive: subscription.isActive !== void 0 ? subscription.isActive : subscriptions[index].isActive,
      autoRenew: subscription.autoRenew !== void 0 ? subscription.autoRenew : subscriptions[index].autoRenew !== void 0 ? subscriptions[index].autoRenew : true,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await env.SUBSCRIPTIONS_KV.put("subscriptions", JSON.stringify(subscriptions));
    return { success: true, subscription: subscriptions[index] };
  } catch (error) {
    return { success: false, message: "\u66F4\u65B0\u8BA2\u9605\u5931\u8D25" };
  }
}
__name(updateSubscription, "updateSubscription");
async function deleteSubscription(id, env) {
  try {
    const subscriptions = await getAllSubscriptions(env);
    const filteredSubscriptions = subscriptions.filter((s) => s.id !== id);
    if (filteredSubscriptions.length === subscriptions.length) {
      return { success: false, message: "\u8BA2\u9605\u4E0D\u5B58\u5728" };
    }
    await env.SUBSCRIPTIONS_KV.put("subscriptions", JSON.stringify(filteredSubscriptions));
    return { success: true };
  } catch (error) {
    return { success: false, message: "\u5220\u9664\u8BA2\u9605\u5931\u8D25" };
  }
}
__name(deleteSubscription, "deleteSubscription");
async function toggleSubscriptionStatus(id, isActive, env) {
  try {
    const subscriptions = await getAllSubscriptions(env);
    const index = subscriptions.findIndex((s) => s.id === id);
    if (index === -1) {
      return { success: false, message: "\u8BA2\u9605\u4E0D\u5B58\u5728" };
    }
    subscriptions[index] = {
      ...subscriptions[index],
      isActive,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await env.SUBSCRIPTIONS_KV.put("subscriptions", JSON.stringify(subscriptions));
    return { success: true, subscription: subscriptions[index] };
  } catch (error) {
    return { success: false, message: "\u66F4\u65B0\u8BA2\u9605\u72B6\u6001\u5931\u8D25" };
  }
}
__name(toggleSubscriptionStatus, "toggleSubscriptionStatus");
async function sendTelegramNotification(message, config) {
  try {
    if (!config.TG_BOT_TOKEN || !config.TG_CHAT_ID) {
      console.error("[Telegram] \u901A\u77E5\u672A\u914D\u7F6E\uFF0C\u7F3A\u5C11Bot Token\u6216Chat ID");
      return false;
    }
    console.log("[Telegram] \u5F00\u59CB\u53D1\u9001\u901A\u77E5\u5230 Chat ID: " + config.TG_CHAT_ID);
    const url = "https://api.telegram.org/bot" + config.TG_BOT_TOKEN + "/sendMessage";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: config.TG_CHAT_ID,
        text: message,
        parse_mode: "Markdown"
      })
    });
    const result = await response.json();
    console.log("[Telegram] \u53D1\u9001\u7ED3\u679C:", result);
    return result.ok;
  } catch (error) {
    console.error("[Telegram] \u53D1\u9001\u901A\u77E5\u5931\u8D25:", error);
    return false;
  }
}
__name(sendTelegramNotification, "sendTelegramNotification");
async function sendNotifyXNotification(title, content, description, config) {
  try {
    if (!config.NOTIFYX_API_KEY) {
      console.error("[NotifyX] \u901A\u77E5\u672A\u914D\u7F6E\uFF0C\u7F3A\u5C11API Key");
      return false;
    }
    console.log("[NotifyX] \u5F00\u59CB\u53D1\u9001\u901A\u77E5: " + title);
    const url = "https://www.notifyx.cn/api/v1/send/" + config.NOTIFYX_API_KEY;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        description: description || ""
      })
    });
    const result = await response.json();
    console.log("[NotifyX] \u53D1\u9001\u7ED3\u679C:", result);
    return result.status === "queued";
  } catch (error) {
    console.error("[NotifyX] \u53D1\u9001\u901A\u77E5\u5931\u8D25:", error);
    return false;
  }
}
__name(sendNotifyXNotification, "sendNotifyXNotification");
async function sendGotifyNotification(title, message, config) {
  try {
    if (!config.GOTIFY_URL || !config.GOTIFY_TOKEN) {
      console.error("[Gotify] \u901A\u77E5\u672A\u914D\u7F6E\uFF0C\u7F3A\u5C11\u670D\u52A1\u5668URL\u6216\u5E94\u7528Token");
      return false;
    }
    console.log("[Gotify] \u5F00\u59CB\u53D1\u9001\u901A\u77E5: " + title);
    let url = config.GOTIFY_URL;
    if (url.endsWith("/")) {
      url = url.slice(0, -1);
    }
    const apiUrl = `${url}/message?token=${config.GOTIFY_TOKEN}`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        message,
        priority: 5
      })
    });
    const result = await response.json();
    console.log("[Gotify] \u53D1\u9001\u7ED3\u679C:", result);
    return response.ok;
  } catch (error) {
    console.error("[Gotify] \u53D1\u9001\u901A\u77E5\u5931\u8D25:", error);
    return false;
  }
}
__name(sendGotifyNotification, "sendGotifyNotification");
async function checkExpiringSubscriptions(env) {
  try {
    console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u5F00\u59CB\u68C0\u67E5\u5373\u5C06\u5230\u671F\u7684\u8BA2\u9605: " + (/* @__PURE__ */ new Date()).toISOString());
    const subscriptions = await getAllSubscriptions(env);
    console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u5171\u627E\u5230 " + subscriptions.length + " \u4E2A\u8BA2\u9605");
    const config = await getConfig(env);
    const now = /* @__PURE__ */ new Date();
    const expiringSubscriptions = [];
    const updatedSubscriptions = [];
    let hasUpdates = false;
    for (const subscription of subscriptions) {
      if (subscription.isActive === false) {
        console.log('[\u5B9A\u65F6\u4EFB\u52A1] \u8BA2\u9605 "' + subscription.name + '" \u5DF2\u505C\u7528\uFF0C\u8DF3\u8FC7');
        continue;
      }
      const expiryDate = new Date(subscription.expiryDate);
      const daysDiff = Math.ceil((expiryDate - now) / (1e3 * 60 * 60 * 24));
      console.log('[\u5B9A\u65F6\u4EFB\u52A1] \u8BA2\u9605 "' + subscription.name + '" \u5230\u671F\u65E5\u671F: ' + expiryDate.toISOString() + ", \u5269\u4F59\u5929\u6570: " + daysDiff);
      const reminderDays = subscription.reminderDays !== void 0 ? subscription.reminderDays : 7;
      let shouldRemind = false;
      if (reminderDays === 0) {
        shouldRemind = daysDiff === 0;
      } else {
        shouldRemind = daysDiff >= 0 && daysDiff <= reminderDays;
      }
      if (daysDiff < 0 && subscription.periodValue && subscription.periodUnit && subscription.autoRenew !== false) {
        console.log('[\u5B9A\u65F6\u4EFB\u52A1] \u8BA2\u9605 "' + subscription.name + '" \u5DF2\u8FC7\u671F\u4E14\u542F\u7528\u81EA\u52A8\u7EED\u8BA2\uFF0C\u6B63\u5728\u66F4\u65B0\u5230\u4E0B\u4E00\u4E2A\u5468\u671F');
        const newExpiryDate = new Date(expiryDate);
        if (subscription.periodUnit === "day") {
          newExpiryDate.setDate(expiryDate.getDate() + subscription.periodValue);
        } else if (subscription.periodUnit === "month") {
          newExpiryDate.setMonth(expiryDate.getMonth() + subscription.periodValue);
        } else if (subscription.periodUnit === "year") {
          newExpiryDate.setFullYear(expiryDate.getFullYear() + subscription.periodValue);
        }
        while (newExpiryDate < now) {
          console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u65B0\u8BA1\u7B97\u7684\u5230\u671F\u65E5\u671F " + newExpiryDate.toISOString() + " \u4ECD\u7136\u8FC7\u671F\uFF0C\u7EE7\u7EED\u8BA1\u7B97\u4E0B\u4E00\u4E2A\u5468\u671F");
          if (subscription.periodUnit === "day") {
            newExpiryDate.setDate(newExpiryDate.getDate() + subscription.periodValue);
          } else if (subscription.periodUnit === "month") {
            newExpiryDate.setMonth(newExpiryDate.getMonth() + subscription.periodValue);
          } else if (subscription.periodUnit === "year") {
            newExpiryDate.setFullYear(newExpiryDate.getFullYear() + subscription.periodValue);
          }
        }
        console.log('[\u5B9A\u65F6\u4EFB\u52A1] \u8BA2\u9605 "' + subscription.name + '" \u66F4\u65B0\u5230\u671F\u65E5\u671F: ' + newExpiryDate.toISOString());
        const updatedSubscription = { ...subscription, expiryDate: newExpiryDate.toISOString() };
        updatedSubscriptions.push(updatedSubscription);
        hasUpdates = true;
        const newDaysDiff = Math.ceil((newExpiryDate - now) / (1e3 * 60 * 60 * 24));
        let shouldRemindAfterRenewal = false;
        if (reminderDays === 0) {
          shouldRemindAfterRenewal = newDaysDiff === 0;
        } else {
          shouldRemindAfterRenewal = newDaysDiff >= 0 && newDaysDiff <= reminderDays;
        }
        if (shouldRemindAfterRenewal) {
          console.log('[\u5B9A\u65F6\u4EFB\u52A1] \u8BA2\u9605 "' + subscription.name + '" \u5728\u63D0\u9192\u8303\u56F4\u5185\uFF0C\u5C06\u53D1\u9001\u901A\u77E5');
          expiringSubscriptions.push({
            ...updatedSubscription,
            daysRemaining: newDaysDiff
          });
        }
      } else if (daysDiff < 0 && subscription.autoRenew === false) {
        console.log('[\u5B9A\u65F6\u4EFB\u52A1] \u8BA2\u9605 "' + subscription.name + '" \u5DF2\u8FC7\u671F\u4E14\u672A\u542F\u7528\u81EA\u52A8\u7EED\u8BA2\uFF0C\u5C06\u53D1\u9001\u8FC7\u671F\u901A\u77E5');
        expiringSubscriptions.push({
          ...subscription,
          daysRemaining: daysDiff
        });
      } else if (shouldRemind) {
        console.log('[\u5B9A\u65F6\u4EFB\u52A1] \u8BA2\u9605 "' + subscription.name + '" \u5728\u63D0\u9192\u8303\u56F4\u5185\uFF0C\u5C06\u53D1\u9001\u901A\u77E5');
        expiringSubscriptions.push({
          ...subscription,
          daysRemaining: daysDiff
        });
      }
    }
    if (hasUpdates) {
      console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u6709 " + updatedSubscriptions.length + " \u4E2A\u8BA2\u9605\u9700\u8981\u66F4\u65B0\u5230\u4E0B\u4E00\u4E2A\u5468\u671F");
      const mergedSubscriptions = subscriptions.map((sub) => {
        const updated = updatedSubscriptions.find((u) => u.id === sub.id);
        return updated || sub;
      });
      await env.SUBSCRIPTIONS_KV.put("subscriptions", JSON.stringify(mergedSubscriptions));
      console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u5DF2\u66F4\u65B0\u8BA2\u9605\u5217\u8868");
    }
    if (expiringSubscriptions.length > 0) {
      console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u6709 " + expiringSubscriptions.length + " \u4E2A\u8BA2\u9605\u9700\u8981\u53D1\u9001\u901A\u77E5");
      let title = "\u8BA2\u9605\u5230\u671F\u63D0\u9192";
      let content = "";
      let description = "\u5171\u6709 " + expiringSubscriptions.length + " \u4E2A\u8BA2\u9605\u5373\u5C06\u5230\u671F";
      if (config.NOTIFICATION_TYPE === "notifyx") {
        content = "## \u8BA2\u9605\u5230\u671F\u63D0\u9192\n\n";
        for (const subscription of expiringSubscriptions) {
          const typeText = subscription.customType || "\u5176\u4ED6";
          let periodText = "";
          if (subscription.periodValue && subscription.periodUnit) {
            const unitMap = { day: "\u5929", month: "\u6708", year: "\u5E74" };
            periodText = "(\u5468\u671F: " + subscription.periodValue + " " + (unitMap[subscription.periodUnit] || subscription.periodUnit) + ")";
          }
          if (subscription.daysRemaining === 0) {
            content += "\u26A0\uFE0F **" + subscription.name + "** (" + typeText + ") " + periodText + " \u4ECA\u5929\u5230\u671F\uFF01\n";
          } else if (subscription.daysRemaining < 0) {
            content += "\u{1F6A8} **" + subscription.name + "** (" + typeText + ") " + periodText + " \u5DF2\u8FC7\u671F " + Math.abs(subscription.daysRemaining) + " \u5929\n";
          } else {
            content += "\u{1F4C5} **" + subscription.name + "** (" + typeText + ") " + periodText + " \u5C06\u5728 " + subscription.daysRemaining + " \u5929\u540E\u5230\u671F\n";
          }
          if (subscription.notes) {
            content += "\u5907\u6CE8: " + subscription.notes + "\n";
          }
          content += "\n";
        }
        const success = await sendNotifyXNotification(title, content, description, config);
        console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u53D1\u9001NotifyX\u901A\u77E5 " + (success ? "\u6210\u529F" : "\u5931\u8D25"));
      } else if (config.NOTIFICATION_TYPE === "gotify") {
        content = "\n";
        for (const subscription of expiringSubscriptions) {
          const typeText = subscription.customType || "\u5176\u4ED6";
          let periodText = "";
          if (subscription.periodValue && subscription.periodUnit) {
            const unitMap = { day: "\u5929", month: "\u6708", year: "\u5E74" };
            periodText = "(\u5468\u671F: " + subscription.periodValue + " " + (unitMap[subscription.periodUnit] || subscription.periodUnit) + ")";
          }
          if (subscription.daysRemaining === 0) {
            content += "\u26A0\uFE0F " + subscription.name + " (" + typeText + ") " + periodText + " \u4ECA\u5929\u5230\u671F\uFF01\n";
          } else if (subscription.daysRemaining < 0) {
            content += "\u{1F6A8} " + subscription.name + " (" + typeText + ") " + periodText + " \u5DF2\u8FC7\u671F " + Math.abs(subscription.daysRemaining) + " \u5929\n";
          } else {
            content += "\u{1F4C5} " + subscription.name + " (" + typeText + ") " + periodText + " \u5C06\u5728 " + subscription.daysRemaining + " \u5929\u540E\u5230\u671F\n";
          }
          if (subscription.notes) {
            content += "\u5907\u6CE8: " + subscription.notes + "\n";
          }
          content += "\n";
        }
        const success = await sendGotifyNotification(title, content, config);
        console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u53D1\u9001Gotify\u901A\u77E5 " + (success ? "\u6210\u529F" : "\u5931\u8D25"));
      } else {
        content = "*\u8BA2\u9605\u5230\u671F\u63D0\u9192*\n\n";
        for (const subscription of expiringSubscriptions) {
          const typeText = subscription.customType || "\u5176\u4ED6";
          let periodText = "";
          if (subscription.periodValue && subscription.periodUnit) {
            const unitMap = { day: "\u5929", month: "\u6708", year: "\u5E74" };
            periodText = "(\u5468\u671F: " + subscription.periodValue + " " + (unitMap[subscription.periodUnit] || subscription.periodUnit) + ")";
          }
          if (subscription.daysRemaining === 0) {
            content += "\u26A0\uFE0F *" + subscription.name + "* (" + typeText + ") " + periodText + " \u4ECA\u5929\u5230\u671F\uFF01\n";
          } else if (subscription.daysRemaining < 0) {
            content += "\u{1F6A8} *" + subscription.name + "* (" + typeText + ") " + periodText + " \u5DF2\u8FC7\u671F " + Math.abs(subscription.daysRemaining) + " \u5929\n";
          } else {
            content += "\u{1F4C5} *" + subscription.name + "* (" + typeText + ") " + periodText + " \u5C06\u5728 " + subscription.daysRemaining + " \u5929\u540E\u5230\u671F\n";
          }
          if (subscription.notes) {
            content += "\u5907\u6CE8: " + subscription.notes + "\n";
          }
          content += "\n";
        }
        const success = await sendTelegramNotification(content, config);
        console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u53D1\u9001Telegram\u901A\u77E5 " + (success ? "\u6210\u529F" : "\u5931\u8D25"));
      }
    } else {
      console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u6CA1\u6709\u9700\u8981\u63D0\u9192\u7684\u8BA2\u9605");
    }
    console.log("[\u5B9A\u65F6\u4EFB\u52A1] \u68C0\u67E5\u5B8C\u6210");
  } catch (error) {
    console.error("[\u5B9A\u65F6\u4EFB\u52A1] \u68C0\u67E5\u5373\u5C06\u5230\u671F\u7684\u8BA2\u9605\u5931\u8D25:", error);
  }
}
__name(checkExpiringSubscriptions, "checkExpiringSubscriptions");
function getCookieValue(cookieString, key) {
  if (!cookieString) return null;
  const match = cookieString.match(new RegExp("(^| )" + key + "=([^;]+)"));
  return match ? match[2] : null;
}
__name(getCookieValue, "getCookieValue");
async function handleRequest(request, env, ctx) {
  return new Response(loginPage, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}
__name(handleRequest, "handleRequest");
var CryptoJS = {
  HmacSHA256: /* @__PURE__ */ __name(function(message, key) {
    const keyData = new TextEncoder().encode(key);
    const messageData = new TextEncoder().encode(message);
    return Promise.resolve().then(() => {
      return crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: { name: "SHA-256" } },
        false,
        ["sign"]
      );
    }).then((cryptoKey) => {
      return crypto.subtle.sign(
        "HMAC",
        cryptoKey,
        messageData
      );
    }).then((buffer) => {
      const hashArray = Array.from(new Uint8Array(buffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    });
  }, "HmacSHA256")
};
var index_v2_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api")) {
      return api.handleRequest(request, env, ctx);
    } else if (url.pathname.startsWith("/admin")) {
      return admin.handleRequest(request, env, ctx);
    } else {
      return handleRequest(request, env, ctx);
    }
  },
  async scheduled(event, env, ctx) {
    console.log("[Workers] \u5B9A\u65F6\u4EFB\u52A1\u89E6\u53D1\u65F6\u95F4:", (/* @__PURE__ */ new Date()).toISOString());
    await checkExpiringSubscriptions(env);
  }
};

// ../../../Scoop/persist/nvm/nodejs/v20.18.3/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../Scoop/persist/nvm/nodejs/v20.18.3/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-bvttYj/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = index_v2_default;

// ../../../Scoop/persist/nvm/nodejs/v20.18.3/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-bvttYj/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index_v2.js.map
