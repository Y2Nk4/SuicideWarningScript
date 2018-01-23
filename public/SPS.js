var SPS = {
	check: function(obj,callback){
		$(obj).bind('input propertychange', function(){
			var input_val = $(this).val().toLowerCase();
			var pattern = /(自杀|suicide|Suicide|抑郁症|不活了|割腕|喝农药|上吊|跳楼|自残|割脉|想死|活不下去|吃安眠药|kill\ myself|kill\ my\ self|want\ to\ die|want\ to\ be\ dead|癌症|绝症|不想活|救我|救命)/;
			var result = pattern.test(input_val);
			if(result){
				var input_key_word_obj = input_val.match(pattern);
				var input_key_word = input_key_word_obj[0];
				return callback(input_key_word);
			}
		});
		
	}
};